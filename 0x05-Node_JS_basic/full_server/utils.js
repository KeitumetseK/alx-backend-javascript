import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const students = content.trim().split('\n').slice(1); // Skip the header
    const result = {};

    students.forEach((student) => {
      const [firstName, , field] = student.split(',');
      if (!result[field]) result[field] = [];
      result[field].push(firstName);
    });

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

