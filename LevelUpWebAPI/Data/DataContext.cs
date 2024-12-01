using LevelUpWebAPI.Entity;

namespace LevelUpWebAPI.Data
{
    public class DataContext : DbContext
    {
        #region Constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        #endregion

        //#region Database Connection
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base.OnConfiguring(optionsBuilder);
        //    optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS; Database=GraduatesDB; Integrated Security=True; MultipleActiveResultSets=True; TrustServerCertificate=True;");
        //}
        //#endregion

        #region Database Sets
        public DbSet<Graduate> Graduates => Set<Graduate>();
        #endregion
    }
}
