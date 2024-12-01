using NewStore.Core.Models;

namespace NewStore.Core.Abstractions
{
    public interface INewsService
    {
        Task<Guid> CreateNew(New news);
        Task<Guid> DeleteNew(Guid id);
        Task<List<New>> GetAllNews();
        Task<Guid> UpdateNew(Guid id, string title, string author, string content);
    }
}