module.exports = (sequelize, DataTypes) => {
  const CourseModule = sequelize.define('CourseModule', {
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    module_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'course_modules',
    timestamps: false,
  });

  CourseModule.associate = (models) => {
    models.Course.belongsToMany(models.Module, {
      as: 'modules',
      foreignKey: 'course_id',
      otherKey: 'module_id',
      through: CourseModule,
    });

    models.Module.belongsToMany(models.Course, {
      as: 'courses',
      foreignKey: 'module_id',
      otherKey: 'course_id',
      through: CourseModule,
    });
  }

  return CourseModule;
}