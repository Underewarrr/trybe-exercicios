const { Course } = require('./models');

async function main() {
  const newCourse = { name: 'Desenvolvimento Web' };
  const course = await Course.create(newCourse);
  console.log(course.dataValues);

  // console.log(Course);
  // const courses = await Course.findAll();
  // console.log(courses);

  // const course = await Course.findByPk(3);
  // console.log(course.dataValues);

  // const activeCourses = await Course.findAll(
  //   { where: { active: false } },
  // );
  // console.log(activeCourses);

  // await Course.update(
  //   { active: 0 },
  //   { where: { id: 1 } },
  // );

  // await Course.destroy({ where: { id: 2 }});

}

main();