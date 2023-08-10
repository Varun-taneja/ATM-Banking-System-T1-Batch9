using ATM_BS.API.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_BS.API.Entities
{
    public class Transaction
    {
        [Required]
        [Column(TypeName = "varchar")]
        public string Type { get; set; }
        [Required]
        public long CardNumber { get; set; }
        [Required]
        public DateTime TransactionTime { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        public string Region { get; set; }
        [Required]
        public double Amount;
        [ForeignKey("Customer")]
        public long AccountNumber { get; set; }
        public Customer? Customer { get; set; }
    }
}
