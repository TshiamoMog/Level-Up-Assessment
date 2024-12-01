using LevelUpWebAPI.Data;
using LevelUpWebAPI.DTOs;
using LevelUpWebAPI.Entity;

namespace LevelUpWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GraduateController : ControllerBase
    {
        private readonly DataContext _context;

        #region Constructor
        public GraduateController( DataContext context)
        {
            _context = context;
        }
        #endregion

        #region Create (Post)
        [HttpPost]
        public async Task<ActionResult<List<Graduate>>> CreateGraduate(GraduateDTO createGraduate)
        {
            if (_context.Graduates.Any(u => u.EmailAddress == createGraduate.EmailAddress))
            {
                return BadRequest("Graduate already exists.");
            }

            var graduate = new Graduate
            {
                GraduateId = Guid.NewGuid(),
                FirstName = createGraduate.FirstName,
                LastName = createGraduate.LastName,
                EmailAddress = createGraduate.EmailAddress,
                DateOfBirth = createGraduate.DateOfBirth,
                Age = CalculateAge(createGraduate.DateOfBirth),
                DateCreated = DateTime.Now,
                IsDeleted = false,

            };

            _context.Graduates.Add(graduate);
            await _context.SaveChangesAsync();

            return Ok(await _context.Graduates.ToListAsync());
        }
        #endregion

        #region View (Get)

        #region View All (Get)
        [HttpGet]
        public async Task<ActionResult<List<Graduate>>> ViewAllGraduates()
        {
            if (_context.Graduates == null)
            {
                return NotFound();
            }

            return Ok(await _context.Graduates.ToListAsync());
        }
        #endregion

        #region View Single Graduate (Get)
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Graduate>> GetGraduate([FromRoute] Guid id)
        {
            var dbGrad = await _context.Graduates.FindAsync(id);
            if (dbGrad == null)
                return NotFound("Graduate not found!");

            return Ok(dbGrad);
        }
        #endregion

        #endregion

        #region Update (Put)
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Graduate>>> UpdateGraduate([FromRoute] Guid id, GraduateDTO graduate)
        {
            var dbGrad = await _context.Graduates.FindAsync(id);
            if (dbGrad == null)
                return NotFound("Graduate not found!");

            var emailInUse = await _context.Graduates.AnyAsync(g => g.EmailAddress == graduate.EmailAddress && g.GraduateId != id);
            if (emailInUse)
                return BadRequest("Email already in use by another graduate.");

            dbGrad.FirstName = graduate.FirstName;
            dbGrad.LastName = graduate.LastName;
            dbGrad.EmailAddress = graduate.EmailAddress;
            dbGrad.DateOfBirth = graduate.DateOfBirth;
            dbGrad.Age = CalculateAge(graduate.DateOfBirth);
            dbGrad.DateEdited = DateTime.Now;

            await _context.SaveChangesAsync();

            return (await _context.Graduates.ToListAsync());
        }
        #endregion

        #region Delete (Delete)
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Graduate>>> DeleteGraduatePermantly(Guid id)
        {
            var dbGrad = await _context.Graduates.FindAsync(id);
            if (dbGrad == null)
                return BadRequest("Graduate not found!");

            _context.Graduates.Remove(dbGrad);
            await _context.SaveChangesAsync();

            return Ok(await _context.Graduates.ToListAsync());
        }
        
        [HttpDelete("/soft{id}")]
        public async Task<ActionResult<List<Graduate>>> DeleteGraduate(Guid id)
        {
            var dbGrad = await _context.Graduates.FindAsync(id);
            if (dbGrad == null)
                return BadRequest("Graduate not found!");

            dbGrad.IsDeleted = true;
            
            await _context.SaveChangesAsync();

            return Ok(await _context.Graduates.ToListAsync());
        }
        #endregion

        #region Helpers
        private int CalculateAge(DateTime dateOfBirth)
        {
            DateTime today = DateTime.Today;
            int age = today.Year - dateOfBirth.Year;
            if (dateOfBirth.Date > today.AddYears(-age))
                age--;

            return age;
        }
        #endregion

    }
}
