using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NewStore.Core.Models
{
    public class New
    {
        public const int MAX_TITLE_LENGTH = 250;
        private New(Guid id,string title,string author,string content)
        {
            Id = id; 
            Title = title; 
            Author = author; 
            Content = content;
        }
        public Guid Id { get;}
        public string Title { get; } = string.Empty;
        public string Author { get; } = string.Empty;  
        public string Content { get; } = string.Empty;

        public static (New News, string Error) Create(Guid id, string title, string author, string content)
        {
            var news = new New(id, title, author, content);

            var error = string.Empty;

            if (string.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH) 
            {
                error = "There is no title or the length exceeds 250 characters";
            }

            return (news, error);
        }
    }
}
