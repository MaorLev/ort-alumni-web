
using Newtonsoft.Json;
using System;

namespace AlumniOrtServer.Data.DTO
{
    public class ResponseDTO
    {
        [JsonProperty(PropertyName = "statuscode")]
        public StatusCODE Status { get; set; }
        [JsonProperty(PropertyName = "statustext")]
        public string StatusText { get; set; }
        [JsonProperty(PropertyName = "user")]
        public int userId { get; set; }
        [JsonProperty(PropertyName = "body")]
        public Object body { get; set; }
        [JsonProperty(PropertyName = "shortbody")]
        public string shortBody { get; set; }

  }
    public enum StatusCODE
    {
        Success = 1000,
        Faild,
        Error,
        Warning
    }
}
