using NewStore.Core.Abstractions;
using NewStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewStore.Applycation.Services
{
    public class NewsService : INewsService
    {
        private readonly INewsRepository _newsRepository;

        public NewsService(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        public async Task<List<New>> GetAllNews()
        {
            return await _newsRepository.Get();
        }

        public async Task<Guid> CreateNew(New news)
        {
            return await _newsRepository.Create(news);
        }

        public async Task<Guid> UpdateNew(Guid id, string title, string author, string content)
        {
            return await _newsRepository.Update(id, title, author, content);
        }

        public async Task<Guid> DeleteNew(Guid id)
        {
            return await _newsRepository.Delete(id);
        }
    }
}
