export default function initBugsController(db) {
  const bugCreation = async (req, res) => {
    try {
      const data = req.body;
      data.createdAt = new Date();
      data.updatedAt = new Date();
      console.log(data);
      const newBug = await db.Bug.create(data);
      // console.log(newBug instanceof Bug);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    bugCreation,
  };
}
