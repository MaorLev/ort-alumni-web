using Newtonsoft.Json;
using OrtAlumniWeb.AlumniOrtServer.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrtAlumniWeb.AlumniOrtServer.Data.DTO
{
  public class CategoryDTO
  {
    [JsonProperty(PropertyName = "id")]
    public int Id { get; set; }
    [JsonProperty(PropertyName = "name")]
    public string Name { get; set; }
    [JsonProperty(PropertyName = "hebName")]
    public string HebName { get; set; }
    //[JsonProperty(PropertyName = "articles")]
    //public ICollection<Article> Articles { get; set; }
    
  }
}
