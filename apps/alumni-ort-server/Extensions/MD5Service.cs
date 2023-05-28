using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace AlumniOrtServer.Extensions
{
  public class MD5Service
  {
    public MD5Service()
    {

    }

    public static string Encrypt(string decrypted)
    {
      string hash = "Password@2021$";
      byte[] data = UTF8Encoding.UTF8.GetBytes(decrypted);

      MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
      TripleDESCryptoServiceProvider tripDES = new TripleDESCryptoServiceProvider();

      tripDES.Key = md5.ComputeHash(UTF8Encoding.UTF8.GetBytes(hash));
      tripDES.Mode = CipherMode.ECB;

      ICryptoTransform transform = tripDES.CreateEncryptor();
      byte[] result = transform.TransformFinalBlock(data, 0, data.Length);

      return Convert.ToBase64String(result);

    }

    public static string Decrypt(string encrypted)
    {
      string hash = "Password@2021$";
      byte[] data = Convert.FromBase64String(encrypted);

      MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
      TripleDESCryptoServiceProvider tripDES = new TripleDESCryptoServiceProvider();

      tripDES.Key = md5.ComputeHash(UTF8Encoding.UTF8.GetBytes(hash));
      tripDES.Mode = CipherMode.ECB;

      ICryptoTransform transform = tripDES.CreateDecryptor();
      byte[] result = transform.TransformFinalBlock(data, 0, data.Length);

      return UTF8Encoding.UTF8.GetString(result);
    }
  }
}