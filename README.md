# Express TDD

Implementation of tests on the roads of a backend written with Node.js and Express.

## Installation
```
git clone https://github.com/JuAlexandre/express-tdd.git
cd express-tdd
npm install
```

Create two databases, one for development and another for tests:

```sql
CREATE DATABASE bookmarks_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE TABLE IF NOT EXISTS bookmark (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255),
  title VARCHAR(255)
) ENGINE = InnoDB;
```

```sql
CREATE DATABASE bookmarks_app_test CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE TABLE IF NOT EXISTS bookmark (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255),
  title VARCHAR(255)
) ENGINE = InnoDB;
```

# Usage

Start the tests with:

```
npm run test
```

or

```
npm run test:watch
```
