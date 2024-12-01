using Microsoft.AspNetCore.Mvc;
using NewsLab2WEB.Controllers.Contracts;
using NewStore.Applycation.Services;
using NewStore.Core.Abstractions;
using NewStore.Core.Models;

namespace NewsLab2WEB.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NewsController: ControllerBase
    {
        private INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<NewsResponse>>> GetNews()
        {
            var news = await _newsService.GetAllNews();

            var response = news.Select(b => new NewsResponse(b.Id, b.Title, b.Author, b.Content));

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateNew([FromBody] NewsRequest request)
        {
            var (news, error) = New.Create(Guid.NewGuid(), request.Title, request.Author, request.Content);

            if (!string.IsNullOrEmpty(error)) 
            { 
                return BadRequest(error);
            }

            var newId = await _newsService.CreateNew(news);

            return Ok(newId);

        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<Guid>> UpdateNews(Guid id, [FromBody] NewsRequest request)
        {
            var newId = await _newsService.UpdateNew(id, request.Title, request.Author, request.Content);

            return Ok(newId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteNews(Guid id)
        {
            return Ok(await _newsService.DeleteNew(id));
        }
    }
}
