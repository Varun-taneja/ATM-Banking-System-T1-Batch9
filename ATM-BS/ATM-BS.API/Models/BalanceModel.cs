using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_BS.API.Models
{
    public class BalanceModel
    {
        public int id { get; set; }
        public long AccountBalance { get; set; }
        [ForeignKey("Customer")]
        public int AccountNumber { get; set; }
        public CustomerModel CustomerModel { get; set; }
    }
}
