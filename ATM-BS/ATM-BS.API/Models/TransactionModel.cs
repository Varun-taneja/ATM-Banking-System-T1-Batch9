using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_BS.API.Models
{
    public class TransactionModel
    {
        public string Type { get; set; }
        public int CardNumber { get; set; }
        public DateTime TransactionTime { get; set; }
        public string Region { get; set; }
        public int Amount { get; set; }
        [ForeignKey("Customer")]
        public long AccountNumber { get; set; }
        public CustomerModel CustomerModel { get; set; }
    }
}
