using ATM_BS.API.Entities;

namespace ATM_BS.API.Service
{
    public interface ITransactionService
    {
        void AddTransaction(Transaction transaction);
        List<Transaction> GetTransactions();
        Transaction GetTransaction(long AccountNumber);
    }
}