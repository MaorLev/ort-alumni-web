using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.DTO
{
  public class ArticleDTO
  {
    [JsonProperty(PropertyName = "id")]
    public int Id { get; set; }
    [JsonProperty(PropertyName = "heading")]
    public string Heading { get; set; }
    [JsonProperty(PropertyName = "subheading")]
    public string SubHeading { get; set; }
    [JsonProperty(PropertyName = "date")]
    public DateTime Date { get; set; }
    [JsonProperty(PropertyName = "detail")]
    public string Detail { get; set; }
    [JsonProperty(PropertyName = "img")]
    public string Img { get; set; }
    [JsonProperty(PropertyName = "originalimgname")]
    public string OriginalImgName { get; set; }
    [JsonProperty(PropertyName = "author")]
    public string Author { get; set; }

    [JsonProperty(PropertyName = "categoryid")]
    public int CategoryId { get; set; }
    [JsonProperty(PropertyName = "category")]
    public CategoryDTO Category { get; set; }
  }
}