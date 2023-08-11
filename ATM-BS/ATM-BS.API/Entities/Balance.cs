using ATM_BS.API.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_BS.API.Entities
{
    public class Balance
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)] //disable identity
      //  public int Id { get; set; }
       public long AccountNumber { get; set; }


        [Required] //applies not null constraint
        [Column(TypeName = "long")]
        public long AccountBalance { get; set; }

<<<<<<< HEAD
        [ForeignKey("Customer")]
        public long AccountNumber { get; set; }
=======
       // [ForeignKey("Customer")]
      //  public long AccountNumber { get; set; }
>>>>>>> 7c254d1ccc6008d4988581c92ef8b4e85e604c5e

      //  public Customer? Customer { get; set; }
    }
}
