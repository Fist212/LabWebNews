using NewStore.Core.Models;

namespace NewStore.Core.Abstractions
{
    public interface INewsRepository
    {
        Task<Guid> Create(New news);
        Task<Guid> Delete(Guid id);
        Task<List<New>> Get();
        Task<Guid> Update(Guid id, string title, string author, string content);
    }
}