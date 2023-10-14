const User=require('./sequelize');

exports.postuser=
    async (req, res) => {
        const { name, email } = req.body;
    
      
        try {
          const user = await User.create({ name, email });
          console.log(user);
          res.json({user});
        } catch (error) {
          console.log('Error:', error);
          res.status(500).json({ error: 'Unable to create a user' });
        }
      };
exports.getuser=async (req, res) => {
    try {
      const users = await User.findAll();
      res.json({ users });
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Unable to fetch users' });
    }
  }
  exports.edituser=async (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      user.name = name;
      user.email = email;
      await user.save();
      res.json({ user });
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Unable to update the user' });
    }
  }
  exports.dltuser=async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'Unable to delete the user' });
    }
  }