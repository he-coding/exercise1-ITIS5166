const courses = [{
    prefix: 'ITIS',
    id: 5166,
    title: 'Network based app development'
}, {
    prefix: 'ITIS',
    id: 5180,
    title: 'Mobile application development'
}, {
    prefix: 'ITCS',
    id: 5156,
    title: 'Applied machine learning'
}, {
    prefix: 'ITCS',
    id: 5160,
    title: 'Database systems'
}];

//return course that matches the id
function findById(id) {
    return courses.find(course => course.id === id);
}

//To do: implement save(course)
function save(course) {
    //if the course already exists, it should not be added again
    if (courses.find(c => c.id === course.id)) {
        return false;
    }
    courses.push(course);
    //if the course is added successfully, return true, otherwise return false
    return true;
}

//implement findByPrefix(prefix)
function findByPrefix(prefix) {
    return courses.filter(course => course.prefix === prefix);
}

//implement updateById(id, course)
function updateById(id, course) {
    const index = courses.findIndex(c => c.id === id);
    // if the course is not found, it should not be added to the array
    if (index === -1) {
        return false;
    }
    courses[index] = course;
    return true;
}

//implement removeById(id)
function removeById(id) {
    const index = courses.findIndex(c => c.id === id);
    if (index === -1) {
        //remove  is successful, otherwise it returns false.
        return false;
    }
    courses.splice(index, 1);
    return true;
}

//To do: Uncommment the following testing code when you are ready to test your functions
save({prefix: 'ITIS', id: 5250, title: 'Computer forensics'});
save({prefix: 'ITIS', id: 6220, title: 'Data privacy'});
save({prefix: 'ITIS', id: 6420, title: 'Usable security and privacy'});
console.log(courses);
console.log(findById(5166));
console.log(findByPrefix('ITIS'));
console.log(removeById(6000));
console.log(updateById(6000));
console.log(updateById(5166, {
    prefix: 'ITIS',
    id: 5166,
    title: 'Network-based app development'
},));
console.log(removeById(6420));
console.log(courses);