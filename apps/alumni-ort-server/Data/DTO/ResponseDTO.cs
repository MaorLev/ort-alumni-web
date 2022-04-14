using AlumniOrtServer.Data.DTO;
using AlumniOrtServer.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlumniOrtServer.DTO
{
    public class ResponseDTO
    {
        [JsonProperty(PropertyName = "status")]
        public StatusCode Status { get; set; }
        [JsonProperty(PropertyName = "statustext")]
        public string StatusText { get; set; }
        [JsonProperty(PropertyName = "user")]
        public int userId { get; set; }

    }
    public enum StatusCode
    {
        Success = 1000,
        Faild,
        Error,
        Warning
    }
}
