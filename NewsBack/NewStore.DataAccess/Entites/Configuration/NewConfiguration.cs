using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NewStore.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewStore.DataAccess.Entites.Configuration
{
    public class NewConfiguration : IEntityTypeConfiguration<NewEntity>
    {
        public void Configure(EntityTypeBuilder<NewEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(b => b.Title).HasMaxLength(New.MAX_TITLE_LENGTH).IsRequired();

            builder.Property(b => b.Author).IsRequired();

            builder.Property(b => b.Content).IsRequired();
        }
    }
}
