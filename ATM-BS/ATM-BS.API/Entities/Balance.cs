using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ATM_BS.API.Entities
{
    public class Balance
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)] //disable identity
        public int AccountNumber { get; set; }

        [Required] //applies not null constraint
        [Column(TypeName = "long")]
        public long AccountBalance { get; set; }
    }
}