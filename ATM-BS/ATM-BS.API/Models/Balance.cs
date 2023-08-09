using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_BS.API.Models
{
    public class Balance
    {
        public int AccountBalance { get; set; }
        [ForeignKey("Customer")]
        public int AccountNumber { get; set; }
        public Customer Customer { get; set; }
    }
}
