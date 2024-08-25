using Newtonsoft.Json;

namespace AlumniOrtServer.Data.DTO
{
  public class UserDTO
  {
    [JsonProperty(PropertyName = "id")]
    public int Id { get; set; }
    [JsonProperty(PropertyName = "firstname")]
    public string FirstName { get; set; }
    [JsonProperty(PropertyName = "lastname")]
    public string LastName { get; set; }
    [JsonProperty(PropertyName = "mail")]
    public string Mail { get; set; }
    [JsonProperty(PropertyName = "password")]
    public string Password { get; set; }
    [JsonProperty(PropertyName = "rolename")]
    public string RoleName { get; set; }
  }
}