using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_BS.API.Models
{
    public class BalanceModel
    {
        //  public int id { get; set; }
        [ForeignKey("CustomerModel")]
        public long AccountNumber { get; set; }
        public long AccountBalance { get; set; }
        
        public CustomerModel CustomerModel { get; set; }
    }
}
