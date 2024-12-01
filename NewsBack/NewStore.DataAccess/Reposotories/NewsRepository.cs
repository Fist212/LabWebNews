using Microsoft.EntityFrameworkCore;
using NewStore.Core.Abstractions;
using NewStore.Core.Models;
using NewStore.DataAccess.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewStore.DataAccess.Reposotories
{
    public class NewsRepository : INewsRepository
    {
        private readonly NewStoreDbContext _context;
        public NewsRepository(NewStoreDbContext context)
        {
            _context = context;
        }
        public async Task<List<New>> Get()
        {
            var newEntities = await _context.News.AsNoTracking().ToListAsync();

            var news = newEntities.Select(b => New.Create(b.Id, b.Title, b.Author, b.Content).News).ToList();

            return news;
        }

        public async Task<Guid> Create(New news)
        {
            var newEntity = new NewEntity
            {
                Id = news.Id,
                Title = news.Title,
                Author = news.Author,
                Content = news.Content,

            };
            await _context.News.AddAsync(newEntity);
            await _context.SaveChangesAsync();

            return newEntity.Id;
        }

        public async Task<Guid> Update(Guid id, string title, string author, string content)
        {
            await _context.News.Where(b => b.Id == id).ExecuteUpdateAsync(s => s.SetProperty(b => b.Title, b => title)
            .SetProperty(b => b.Author, b => author)
            .SetProperty(b => b.Content, b => content));

            return id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            await _context.News.Where(b => b.Id == id).ExecuteDeleteAsync();

            return id;
        }
    }
}
