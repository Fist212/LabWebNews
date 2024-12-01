using Microsoft.EntityFrameworkCore;
using NewStore.DataAccess.Entites;

namespace NewStore.DataAccess
{
    public class NewStoreDbContext : DbContext
    {
        public NewStoreDbContext(DbContextOptions<NewStoreDbContext> options): base(options) 
        { 
        }

        public DbSet<NewEntity> News { get; set; }
    }
}
