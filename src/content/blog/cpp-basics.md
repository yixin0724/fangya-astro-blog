---
title: "C++基础"
pubDate: "2024-10-08"
updatedDate: "2024-10-08"
cover: https://pic.imgdb.cn/item/670495d8d29ded1a8c170dd0.jpg
tags: 
  - "C++"
  - "编程语言"
  - "面向对象"
  - "现代C++"
categories: "Programming"
description: "系统整理 C++ 的基础语法、面向对象、STL、内存管理与常用现代 C++ 特性，为后续学习高性能计算、系统编程和工程开发打基础。"
draft: false
---








# 1. C++学习路线总览

C++ 不是“带类的 C”这么简单。学习 C++ 应该抓住四条主线：

1. **C 基础能力**：变量、函数、指针、数组、结构体、内存布局。
2. **面向对象能力**：类、封装、继承、多态、构造析构、对象生命周期。
3. **泛型和 STL 能力**：模板、容器、迭代器、算法、函数对象、Lambda。
4. **现代 C++ 工程能力**：RAII、智能指针、移动语义、并发、CMake、调试工具。

推荐学习顺序：

| 阶段     | 学习重点                                         | 目标                       |
| -------- | ------------------------------------------------ | -------------------------- |
| 入门     | 输入输出、引用、函数重载、类和对象               | 能写基础 C++ 程序          |
| 核心     | 构造析构、拷贝控制、继承多态、虚函数             | 理解对象生命周期和多态机制 |
| STL      | `vector`、`string`、`map`、`unordered_map`、算法 | 能写高质量日常代码         |
| 现代 C++ | `auto`、范围 for、Lambda、智能指针、移动语义     | 写出安全、简洁、现代化代码 |
| 工程     | 多文件、CMake、库、调试、性能分析                | 能组织真实项目             |
| 进阶     | 模板元编程、并发、协程、内存模型                 | 进入高性能、系统级开发     |

---

# 2. C++概述

## 2.1 C++是什么

`C++` 是一种多范式编程语言，支持：

- 面向过程编程
- 面向对象编程
- 泛型编程
- 函数式风格编程
- 模板元编程
- 系统级编程
- 高性能并发编程

C++ 常用于：

- 游戏引擎
- 图形渲染
- 交易系统
- 数据库内核
- 操作系统组件
- 编译器
- 浏览器内核
- 高性能服务端
- 嵌入式与自动驾驶
- AI 推理引擎底层

## 2.2 C++的特点

### 1. 兼容 C 语言大部分语法

C++ 可以复用大量 C 语言语法，例如指针、数组、结构体、函数、预处理器等。

### 2. 支持面向对象

C++ 提供 `class`、`private`、`public`、`protected`、继承、虚函数、多态等机制。

### 3. 支持泛型编程

模板是 C++ 的核心能力之一：

```cpp
template <typename T>
T max_value(T a, T b) {
    return a > b ? a : b;
}
```

### 4. 强调零开销抽象

C++ 的设计理念之一是：不使用的特性不付成本，使用的高级抽象尽量不比手写底层代码更慢。

### 5. 资源管理复杂但强大

C++ 没有 Java 那样的统一 GC，资源通常通过 `RAII` 和智能指针管理。

---

# 3. 开发环境与编译运行

## 3.1 常见编译器

| 编译器    | 平台                    | 说明                              |
| --------- | ----------------------- | --------------------------------- |
| `g++`     | Linux / Windows / macOS | GCC 的 C++ 编译器                 |
| `clang++` | Linux / macOS / Windows | Clang 的 C++ 编译器，错误提示友好 |
| `MSVC`    | Windows                 | Visual Studio 默认 C++ 编译器     |

## 3.2 编译命令

```bash
g++ main.cpp -o main
```

运行：

```bash
./main
```

Windows：

```bash
main.exe
```

## 3.3 指定 C++ 标准

```bash
g++ -std=c++11 main.cpp -o main
g++ -std=c++14 main.cpp -o main
g++ -std=c++17 main.cpp -o main
g++ -std=c++20 main.cpp -o main
g++ -std=c++23 main.cpp -o main
```

工程学习推荐：

```bash
g++ -std=c++17 -Wall -Wextra -g -O0 main.cpp -o main
```

现代特性学习可用：

```bash
g++ -std=c++20 -Wall -Wextra -g -O0 main.cpp -o main
```

## 3.4 常用编译参数

| 参数                   | 作用                       |
| ---------------------- | -------------------------- |
| `-std=c++17`           | 指定 C++ 标准              |
| `-Wall`                | 开启常见警告               |
| `-Wextra`              | 开启更多警告               |
| `-g`                   | 生成调试信息               |
| `-O0`                  | 不优化，方便调试           |
| `-O2`                  | 常用优化等级               |
| `-fsanitize=address`   | 检查内存越界、释放后使用等 |
| `-fsanitize=undefined` | 检查未定义行为             |

推荐调试命令：

```bash
g++ -std=c++17 -Wall -Wextra -g -O0 -fsanitize=address,undefined main.cpp -o main
```

---

# 4. 第一个 C++ 程序

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}
```

解释：

- `#include <iostream>`：引入输入输出流库。
- `int main()`：程序入口函数。
- `std::cout`：标准输出对象。
- `<<`：输出运算符。
- `std::endl`：换行并刷新缓冲区。
- `return 0`：程序正常结束。

更常用的换行方式：

```cpp
std::cout << "Hello, C++!\n";
```

说明：`std::endl` 会额外刷新缓冲区，频繁使用可能影响性能；普通换行优先用 `\n`。

---

# 5. 命名空间与输入输出

## 5.1 命名空间

C++ 使用命名空间避免名字冲突。

```cpp
namespace mylib {
    int add(int a, int b) {
        return a + b;
    }
}
```

使用：

```cpp
int result = mylib::add(1, 2);
```

`std` 是标准库命名空间。

## 5.2 `using namespace std` 的问题

很多入门代码写：

```cpp
using namespace std;
```

然后可以直接写：

```cpp
cout << "hello" << endl;
```

但工程中不推荐在头文件或全局使用 `using namespace std;`，因为容易造成命名冲突。

更推荐：

```cpp
std::cout << "hello\n";
```

或者在局部使用：

```cpp
using std::cout;
using std::string;
```

## 5.3 输入输出

```cpp
#include <iostream>

int main() {
    int age;
    std::cin >> age;
    std::cout << "age = " << age << '\n';
    return 0;
}
```

多个输入：

```cpp
int a, b;
std::cin >> a >> b;
```

读取一整行：

```cpp
#include <iostream>
#include <string>

int main() {
    std::string line;
    std::getline(std::cin, line);
    std::cout << line << '\n';
    return 0;
}
```

注意：如果前面用了 `std::cin >> x`，后面再用 `std::getline()`，可能会读到残留换行。

解决：

```cpp
std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
```

需要头文件：

```cpp
#include <limits>
```

---

# 6. 基础语法与数据类型

## 6.1 基本数据类型

| 类型          | 说明                             |
| ------------- | -------------------------------- |
| `bool`        | 布尔类型，值为 `true` 或 `false` |
| `char`        | 字符                             |
| `short`       | 短整型                           |
| `int`         | 整型                             |
| `long`        | 长整型                           |
| `long long`   | 长长整型                         |
| `float`       | 单精度浮点                       |
| `double`      | 双精度浮点                       |
| `long double` | 扩展精度浮点                     |
| `void`        | 空类型                           |

查看大小：

```cpp
#include <iostream>

int main() {
    std::cout << sizeof(int) << '\n';
    std::cout << sizeof(double) << '\n';
    return 0;
}
```

## 6.2 固定宽度整数

头文件：

```cpp
#include <cstdint>
```

常用：

```cpp
std::int32_t a = 10;
std::uint64_t b = 100;
```

适合协议、文件格式、跨平台场景。

## 6.3 类型推导 `auto`

```cpp
auto x = 10;        // int
auto y = 3.14;      // double
auto s = "hello";   // const char*
```

适合复杂类型：

```cpp
std::vector<int> nums = {1, 2, 3};
for (auto it = nums.begin(); it != nums.end(); ++it) {
    std::cout << *it << '\n';
}
```

## 6.4 类型别名

C 风格：

```cpp
typedef long long ll;
```

C++ 推荐：

```cpp
using ll = long long;
using StringList = std::vector<std::string>;
```

## 6.5 `enum` 和 `enum class`

传统枚举：

```cpp
enum Color {
    Red,
    Green,
    Blue
};
```

现代推荐强类型枚举：

```cpp
enum class Color {
    Red,
    Green,
    Blue
};

Color c = Color::Red;
```

`enum class` 的优点：

- 不污染外部作用域。
- 不会隐式转换为整数。
- 类型更安全。

---

# 7. 引用、指针与 const

## 7.1 引用

引用是变量的别名。

```cpp
int a = 10;
int& ref = a;

ref = 20;
std::cout << a << '\n';  // 20
```

特点：

- 引用定义时必须初始化。
- 引用一旦绑定，不能再绑定其他对象。
- 使用引用操作对象更自然。

## 7.2 指针

```cpp
int a = 10;
int* p = &a;

std::cout << *p << '\n';
```

指针可以为空：

```cpp
int* p = nullptr;
```

现代 C++ 推荐使用 `nullptr`，不要用 `NULL` 或 `0` 表示空指针。

## 7.3 引用和指针的区别

| 对比             | 引用             | 指针                         |
| ---------------- | ---------------- | ---------------------------- |
| 是否必须初始化   | 必须             | 不必须                       |
| 是否能为空       | 通常不能         | 可以为 `nullptr`             |
| 是否能改绑定对象 | 不能             | 可以                         |
| 使用方式         | 像普通变量       | 需要 `*` 解引用              |
| 典型用途         | 函数参数、返回值 | 动态内存、可选对象、底层操作 |

## 7.4 `const` 常量

```cpp
const int x = 10;
```

`const` 修饰变量后不能修改。

## 7.5 `const` 和指针

```cpp
const int* p1 = &a;       // 指向常量的指针，不能通过 p1 改值
int* const p2 = &a;       // 指针常量，不能改指向
const int* const p3 = &a; // 指向常量的指针常量
```

## 7.6 常量引用

```cpp
void print(const std::string& s) {
    std::cout << s << '\n';
}
```

优点：

- 避免拷贝。
- 防止函数内部修改对象。
- 可以绑定临时对象。

常用参数传递规则：

| 类型                              | 推荐传参        |
| --------------------------------- | --------------- |
| `int`、`double` 等小类型          | 值传递          |
| `std::string`、`vector`、自定义类 | `const T&`      |
| 需要修改实参                      | `T&`            |
| 可选对象或可为空                  | `T*` 或智能指针 |

---

# 8. 函数进阶

## 8.1 函数重载

同名函数，参数列表不同。

```cpp
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}
```

注意：函数重载不能只靠返回值类型区分。

错误：

```cpp
int func(int x);
double func(int x);  // 错误
```

## 8.2 默认参数

```cpp
void print(const std::string& msg, int count = 1) {
    for (int i = 0; i < count; ++i) {
        std::cout << msg << '\n';
    }
}
```

调用：

```cpp
print("hello");
print("hello", 3);
```

注意：默认参数一般写在函数声明中，不要在声明和定义中重复写。

## 8.3 内联函数

```cpp
inline int square(int x) {
    return x * x;
}
```

`inline` 是建议编译器内联，也允许函数定义放在头文件中以避免多重定义问题。

现代编译器是否内联主要由优化器决定。

## 8.4 函数返回引用

```cpp
int& get_first(std::vector<int>& nums) {
    return nums[0];
}
```

使用：

```cpp
get_first(nums) = 100;
```

注意：不能返回局部变量引用。

错误：

```cpp
int& bad() {
    int x = 10;
    return x;  // 错误
}
```

## 8.5 函数对象

重载 `operator()` 的对象称为函数对象。

```cpp
struct Add {
    int operator()(int a, int b) const {
        return a + b;
    }
};

Add add;
std::cout << add(1, 2) << '\n';
```

## 8.6 `std::function`

```cpp
#include <functional>

std::function<int(int, int)> op = [](int a, int b) {
    return a + b;
};
```

适合存储普通函数、函数对象、Lambda 等可调用对象。

---

# 9. 类和对象

## 9.1 类的基本定义

```cpp
class Student {
public:
    void setName(const std::string& name) {
        name_ = name;
    }

    std::string getName() const {
        return name_;
    }

private:
    std::string name_;
};
```

使用：

```cpp
Student stu;
stu.setName("Tom");
std::cout << stu.getName() << '\n';
```

## 9.2 访问权限

| 权限        | 说明               |
| ----------- | ------------------ |
| `public`    | 类外可以访问       |
| `protected` | 类内和子类可以访问 |
| `private`   | 只有类内可以访问   |

`class` 默认成员权限是 `private`。  
`struct` 默认成员权限是 `public`。

## 9.3 类和结构体的区别

在 C++ 中，`class` 和 `struct` 本质非常接近，主要默认权限不同：

| 对比         | `class`            | `struct`     |
| ------------ | ------------------ | ------------ |
| 默认成员权限 | `private`          | `public`     |
| 默认继承权限 | `private`          | `public`     |
| 常用场景     | 有封装和行为的对象 | 简单数据聚合 |

## 9.4 成员函数中的 `this`

`this` 是指向当前对象的指针。

```cpp
class Counter {
public:
    void setValue(int value) {
        this->value = value;
    }

private:
    int value;
};
```

## 9.5 `const` 成员函数

```cpp
class Student {
public:
    std::string getName() const {
        return name_;
    }

private:
    std::string name_;
};
```

`const` 成员函数承诺不修改对象状态。

如果对象是 `const`，只能调用 `const` 成员函数。

---

# 10. 构造函数、析构函数与对象生命周期

## 10.1 构造函数

对象创建时自动调用。

```cpp
class Student {
public:
    Student(const std::string& name, int age) : name_(name), age_(age) {}

private:
    std::string name_;
    int age_;
};
```

推荐使用成员初始化列表：

```cpp
Student(const std::string& name, int age) : name_(name), age_(age) {}
```

而不是：

```cpp
Student(const std::string& name, int age) {
    name_ = name;
    age_ = age;
}
```

原因：初始化列表是初始化，函数体内赋值是先默认初始化再赋值。

## 10.2 默认构造函数

```cpp
class Student {
public:
    Student() = default;
};
```

## 10.3 析构函数

对象销毁时自动调用。

```cpp
class File {
public:
    ~File() {
        std::cout << "destroy\n";
    }
};
```

析构函数常用于释放资源。

## 10.4 构造和析构顺序

局部对象：

```cpp
{
    Student a;
    Student b;
}
```

构造顺序：`a` → `b`  
析构顺序：`b` → `a`

成员对象构造顺序：按成员声明顺序，不是初始化列表顺序。

```cpp
class A {
private:
    X x;
    Y y;
public:
    A() : y(), x() {}  // 实际仍然先 x 后 y
};
```

## 10.5 `explicit`

防止单参数构造函数发生隐式转换。

```cpp
class Person {
public:
    explicit Person(int age) : age_(age) {}
private:
    int age_;
};
```

没有 `explicit` 时：

```cpp
Person p = 18;  // 可能发生隐式转换
```

加上 `explicit` 后必须：

```cpp
Person p(18);
```

---

# 11. 拷贝控制与移动语义

## 11.1 拷贝构造函数

```cpp
class Student {
public:
    Student(const Student& other) {
        // 拷贝构造
    }
};
```

调用场景：

```cpp
Student a;
Student b = a;
Student c(a);
```

## 11.2 拷贝赋值运算符

```cpp
class Student {
public:
    Student& operator=(const Student& other) {
        if (this != &other) {
            // 复制资源
        }
        return *this;
    }
};
```

调用场景：

```cpp
Student a;
Student b;
b = a;
```

## 11.3 浅拷贝和深拷贝

浅拷贝：只复制指针地址，多个对象共享同一块资源，容易重复释放。

深拷贝：重新分配资源，并复制内容。

示例：

```cpp
class Buffer {
public:
    Buffer(std::size_t size) : size_(size), data_(new int[size]) {}

    Buffer(const Buffer& other) : size_(other.size_), data_(new int[other.size_]) {
        std::copy(other.data_, other.data_ + size_, data_);
    }

    Buffer& operator=(const Buffer& other) {
        if (this != &other) {
            int* new_data = new int[other.size_];
            std::copy(other.data_, other.data_ + other.size_, new_data);
            delete[] data_;
            data_ = new_data;
            size_ = other.size_;
        }
        return *this;
    }

    ~Buffer() {
        delete[] data_;
    }

private:
    std::size_t size_;
    int* data_;
};
```

## 11.4 三/五/零法则

### 三法则

如果类需要自定义以下任意一个，通常也需要另外两个：

1. 析构函数
2. 拷贝构造函数
3. 拷贝赋值运算符

### 五法则

C++11 后加入移动语义，五个特殊成员函数：

1. 析构函数
2. 拷贝构造函数
3. 拷贝赋值运算符
4. 移动构造函数
5. 移动赋值运算符

### 零法则

现代 C++ 推荐使用标准库对象管理资源，例如 `std::vector`、`std::string`、`std::unique_ptr`，让编译器自动生成特殊成员函数。

## 11.5 右值引用

```cpp
int&& r = 10;
```

右值引用用于绑定临时对象，是移动语义的基础。

## 11.6 移动构造函数

```cpp
class Buffer {
public:
    Buffer(Buffer&& other) noexcept
        : size_(other.size_), data_(other.data_) {
        other.size_ = 0;
        other.data_ = nullptr;
    }

private:
    std::size_t size_{};
    int* data_{};
};
```

移动不是复制资源，而是“接管资源”。

## 11.7 `std::move`

```cpp
std::string a = "hello";
std::string b = std::move(a);
```

`std::move` 本身不移动，它只是把对象转换成右值引用，真正移动由移动构造或移动赋值完成。

被移动后的对象仍然有效，但值处于未指定状态，只能安全地赋新值或销毁。

---

# 12. 继承与多态

## 12.1 继承

```cpp
class Animal {
public:
    void eat() {
        std::cout << "eat\n";
    }
};

class Dog : public Animal {
public:
    void bark() {
        std::cout << "bark\n";
    }
};
```

## 12.2 继承方式

| 继承方式    | 父类 `public` 成员在子类中 | 父类 `protected` 成员在子类中 |
| ----------- | -------------------------- | ----------------------------- |
| `public`    | `public`                   | `protected`                   |
| `protected` | `protected`                | `protected`                   |
| `private`   | `private`                  | `private`                     |

最常用的是 `public` 继承，表示 `is-a` 关系。

## 12.3 虚函数

```cpp
class Animal {
public:
    virtual void speak() {
        std::cout << "animal\n";
    }
};

class Dog : public Animal {
public:
    void speak() override {
        std::cout << "dog\n";
    }
};
```

调用：

```cpp
Animal* p = new Dog();
p->speak();  // dog
delete p;
```

## 12.4 虚析构函数

如果一个类作为基类，并且可能通过基类指针删除派生类对象，那么析构函数必须是虚函数。

```cpp
class Base {
public:
    virtual ~Base() = default;
};
```

否则：

```cpp
Base* p = new Derived();
delete p;  // 如果 Base 析构不是 virtual，可能只调用 Base 析构
```

## 12.5 纯虚函数和抽象类

```cpp
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
};
```

含有纯虚函数的类称为抽象类，不能直接实例化。

## 12.6 多态底层原理

C++ 动态多态通常通过虚函数表实现：

- 含虚函数的类对象中通常有一个虚表指针 `vptr`。
- `vptr` 指向虚函数表 `vtable`。
- 调用虚函数时，根据对象真实类型查表调用。

面试表达：

> C++ 的运行时多态基于虚函数，通常由虚函数表和虚表指针实现。基类指针或引用调用虚函数时，会根据对象的动态类型分发到派生类重写的方法。

## 12.7 重载、重写、隐藏

| 概念 | 发生位置   | 要求                                     |
| ---- | ---------- | ---------------------------------------- |
| 重载 | 同一作用域 | 函数名相同，参数列表不同                 |
| 重写 | 父子类     | 虚函数，函数签名一致                     |
| 隐藏 | 父子类     | 子类函数名与父类相同即可隐藏父类同名函数 |

推荐使用 `override` 避免误写：

```cpp
void speak() override;
```

---

# 13. 运算符重载

## 13.1 基本概念

运算符重载允许自定义类型像内置类型一样使用运算符。

```cpp
class Point {
public:
    Point(int x, int y) : x_(x), y_(y) {}

    Point operator+(const Point& other) const {
        return Point(x_ + other.x_, y_ + other.y_);
    }

private:
    int x_;
    int y_;
};
```

## 13.2 输出运算符重载

```cpp
#include <iostream>

class Point {
public:
    Point(int x, int y) : x_(x), y_(y) {}

    friend std::ostream& operator<<(std::ostream& os, const Point& p) {
        os << "(" << p.x_ << ", " << p.y_ << ")";
        return os;
    }

private:
    int x_;
    int y_;
};
```

## 13.3 常见可重载运算符

可以重载：

```text
+ - * / % == != < > <= >= [] () -> = << >> ++ --
```

不能重载：

```text
.  .*  ::  ?:  sizeof  typeid
```

## 13.4 重载原则

- 不改变运算符常规含义。
- 不滥用重载。
- 二元运算符尽量保持左右语义清晰。
- `operator=` 要处理自赋值。
- `operator<<` 和 `operator>>` 通常重载为友元函数。

---

# 14. 模板与泛型编程

## 14.1 函数模板

```cpp
template <typename T>
T max_value(T a, T b) {
    return a > b ? a : b;
}
```

调用：

```cpp
std::cout << max_value(1, 2) << '\n';
std::cout << max_value(1.5, 2.5) << '\n';
```

## 14.2 类模板

```cpp
template <typename T>
class Box {
public:
    explicit Box(const T& value) : value_(value) {}

    const T& get() const {
        return value_;
    }

private:
    T value_;
};
```

使用：

```cpp
Box<int> b1(10);
Box<std::string> b2("hello");
```

## 14.3 模板特化

```cpp
template <typename T>
struct Printer {
    void print(const T& value) {
        std::cout << value << '\n';
    }
};

template <>
struct Printer<bool> {
    void print(bool value) {
        std::cout << (value ? "true" : "false") << '\n';
    }
};
```

## 14.4 非类型模板参数

```cpp
template <typename T, std::size_t N>
class Array {
private:
    T data_[N];
};
```

## 14.5 模板和头文件

模板通常需要把定义放在头文件中，因为编译器需要在实例化时看到完整定义。

错误常见原因：

```text
undefined reference to template function
```

通常是模板声明和定义分离到 `.cpp` 后，使用方看不到定义。

## 14.6 `concepts` 简介（C++20）

`concepts` 用于约束模板参数。

```cpp
#include <concepts>

template <std::integral T>
T add(T a, T b) {
    return a + b;
}
```

优点：

- 错误信息更清晰。
- 模板约束更明确。
- 提高泛型代码可读性。

---

# 15. STL 标准模板库

STL 是 C++ 标准库中最常用的部分，核心由以下组成：

1. 容器：存储数据。
2. 迭代器：连接容器和算法。
3. 算法：排序、查找、遍历等。
4. 函数对象和 Lambda。
5. 适配器。

## 15.1 `std::vector`

动态数组。

```cpp
#include <vector>

std::vector<int> nums = {1, 2, 3};
nums.push_back(4);
```

遍历：

```cpp
for (int x : nums) {
    std::cout << x << '\n';
}
```

常用方法：

| 方法          | 作用           |
| ------------- | -------------- |
| `push_back()` | 尾部添加       |
| `pop_back()`  | 尾部删除       |
| `size()`      | 元素个数       |
| `empty()`     | 是否为空       |
| `clear()`     | 清空           |
| `reserve()`   | 预留容量       |
| `resize()`    | 改变元素个数   |
| `at()`        | 带边界检查访问 |
| `operator[]`  | 不检查边界访问 |

`reserve` 和 `resize` 区别：

- `reserve(n)`：只改变容量，不改变元素个数。
- `resize(n)`：改变元素个数，可能创建新元素。

## 15.2 `std::string`

```cpp
#include <string>

std::string s = "hello";
s += " world";
```

常用方法：

| 方法                  | 作用              |
| --------------------- | ----------------- |
| `size()` / `length()` | 长度              |
| `empty()`             | 是否为空          |
| `substr()`            | 截取子串          |
| `find()`              | 查找              |
| `replace()`           | 替换              |
| `c_str()`             | 获取 C 风格字符串 |

示例：

```cpp
std::string s = "hello world";
auto pos = s.find("world");
if (pos != std::string::npos) {
    std::cout << pos << '\n';
}
```

## 15.3 `std::array`

固定长度数组，C++11 引入。

```cpp
#include <array>

std::array<int, 3> arr = {1, 2, 3};
```

相比 C 数组：

- 支持 `size()`。
- 支持迭代器。
- 可以整体赋值。

## 15.4 `std::list`

双向链表。

```cpp
#include <list>

std::list<int> lst = {1, 2, 3};
lst.push_front(0);
lst.push_back(4);
```

适合频繁在中间插入删除，但不支持随机访问。

## 15.5 `std::deque`

双端队列。

```cpp
#include <deque>

std::deque<int> dq;
dq.push_front(1);
dq.push_back(2);
```

## 15.6 `std::map`

基于红黑树的有序键值对。

```cpp
#include <map>

std::map<std::string, int> scores;
scores["Tom"] = 90;
```

特点：

- 键有序。
- 查找、插入、删除通常是 `O(log n)`。

## 15.7 `std::unordered_map`

基于哈希表的无序键值对。

```cpp
#include <unordered_map>

std::unordered_map<std::string, int> scores;
scores["Tom"] = 90;
```

特点：

- 无序。
- 平均 `O(1)` 查找。
- 最坏情况可能退化。

## 15.8 `std::set` 和 `std::unordered_set`

```cpp
std::set<int> s1;
std::unordered_set<int> s2;
```

| 容器            | 底层   | 是否有序 | 查找复杂度  |
| --------------- | ------ | -------- | ----------- |
| `set`           | 红黑树 | 有序     | `O(log n)`  |
| `unordered_set` | 哈希表 | 无序     | 平均 `O(1)` |

## 15.9 容器适配器

| 适配器                | 说明                 |
| --------------------- | -------------------- |
| `std::stack`          | 栈，后进先出         |
| `std::queue`          | 队列，先进先出       |
| `std::priority_queue` | 优先队列，默认大顶堆 |

示例：

```cpp
#include <queue>

std::priority_queue<int> pq;
pq.push(3);
pq.push(1);
pq.push(5);
std::cout << pq.top() << '\n';  // 5
```

小顶堆：

```cpp
std::priority_queue<int, std::vector<int>, std::greater<int>> pq;
```

## 15.10 STL 算法

头文件：

```cpp
#include <algorithm>
```

常用：

```cpp
std::sort(nums.begin(), nums.end());
std::reverse(nums.begin(), nums.end());
auto it = std::find(nums.begin(), nums.end(), 10);
std::count(nums.begin(), nums.end(), 1);
std::max_element(nums.begin(), nums.end());
std::min_element(nums.begin(), nums.end());
```

自定义排序：

```cpp
std::sort(nums.begin(), nums.end(), [](int a, int b) {
    return a > b;
});
```

## 15.11 迭代器失效

常见规则：

- `vector` 扩容会导致所有迭代器、指针、引用失效。
- `vector` 中间插入/删除会导致插入/删除点之后的迭代器失效。
- `list` 插入删除通常不会影响其他元素迭代器。
- `unordered_map` rehash 会导致迭代器失效。

错误示例：

```cpp
for (auto it = nums.begin(); it != nums.end(); ++it) {
    if (*it == 3) {
        nums.erase(it);  // it 失效
    }
}
```

正确：

```cpp
for (auto it = nums.begin(); it != nums.end(); ) {
    if (*it == 3) {
        it = nums.erase(it);
    } else {
        ++it;
    }
}
```

---

# 16. 智能指针与 RAII

## 16.1 RAII 是什么

`RAII`：Resource Acquisition Is Initialization，资源获取即初始化。

核心思想：

> 把资源生命周期绑定到对象生命周期。对象构造时获取资源，对象析构时释放资源。

典型资源：

- 堆内存
- 文件句柄
- 互斥锁
- 网络连接
- 数据库连接

## 16.2 为什么需要智能指针

原始指针容易出现：

- 忘记 `delete`
- 重复 `delete`
- 异常导致资源泄漏
- 所有权不清晰

智能指针通过对象析构自动释放资源。

头文件：

```cpp
#include <memory>
```

## 16.3 `std::unique_ptr`

独占所有权。

```cpp
auto p = std::make_unique<int>(10);
std::cout << *p << '\n';
```

不能拷贝：

```cpp
std::unique_ptr<int> p1 = std::make_unique<int>(10);
// std::unique_ptr<int> p2 = p1;  // 错误
```

可以移动：

```cpp
std::unique_ptr<int> p2 = std::move(p1);
```

推荐默认使用 `unique_ptr` 表示独占资源。

## 16.4 `std::shared_ptr`

共享所有权，内部使用引用计数。

```cpp
auto p1 = std::make_shared<int>(10);
auto p2 = p1;

std::cout << p1.use_count() << '\n';
```

当最后一个 `shared_ptr` 销毁时，资源释放。

## 16.5 `std::weak_ptr`

弱引用，不增加引用计数，用于解决 `shared_ptr` 循环引用。

循环引用问题：

```cpp
struct B;

struct A {
    std::shared_ptr<B> b;
};

struct B {
    std::shared_ptr<A> a;
};
```

解决：

```cpp
struct B {
    std::weak_ptr<A> a;
};
```

使用 `weak_ptr`：

```cpp
if (auto sp = wp.lock()) {
    std::cout << *sp << '\n';
}
```

## 16.6 智能指针使用原则

- 默认使用 `std::unique_ptr`。
- 确实需要共享所有权时使用 `std::shared_ptr`。
- 需要观察但不拥有时使用裸指针、引用或 `std::weak_ptr`。
- 优先使用 `std::make_unique` 和 `std::make_shared`。
- 不要把同一个裸指针交给多个智能指针管理。

错误：

```cpp
int* raw = new int(10);
std::shared_ptr<int> p1(raw);
std::shared_ptr<int> p2(raw);  // 错误：重复释放
```

---

# 17. 异常处理

## 17.1 基本语法

```cpp
try {
    throw std::runtime_error("error");
} catch (const std::exception& e) {
    std::cout << e.what() << '\n';
}
```

需要头文件：

```cpp
#include <stdexcept>
#include <exception>
```

## 17.2 常见标准异常

| 异常                    | 说明         |
| ----------------------- | ------------ |
| `std::exception`        | 标准异常基类 |
| `std::runtime_error`    | 运行时错误   |
| `std::logic_error`      | 逻辑错误     |
| `std::out_of_range`     | 越界         |
| `std::invalid_argument` | 参数非法     |
| `std::bad_alloc`        | 内存分配失败 |

## 17.3 捕获方式

推荐：

```cpp
catch (const std::exception& e)
```

不推荐值捕获：

```cpp
catch (std::exception e)  // 可能对象切片
```

## 17.4 构造析构中的异常

构造函数可以抛异常。  
析构函数不应该抛异常。

如果析构函数在栈展开过程中再次抛异常，程序可能调用 `std::terminate()`。

析构函数建议：

```cpp
~Resource() noexcept {
    // 释放资源，不抛异常
}
```

## 17.5 异常和 RAII

RAII 可以保证异常发生时资源仍然释放。

```cpp
void func() {
    auto p = std::make_unique<int>(10);
    throw std::runtime_error("error");
} // p 自动析构，不泄漏
```

---

# 18. Lambda 表达式

## 18.1 基本语法

```cpp
[capture](parameters) -> return_type {
    body
};
```

示例：

```cpp
auto add = [](int a, int b) {
    return a + b;
};

std::cout << add(1, 2) << '\n';
```

## 18.2 捕获方式

### 值捕获

```cpp
int x = 10;
auto f = [x]() {
    std::cout << x << '\n';
};
```

### 引用捕获

```cpp
int x = 10;
auto f = [&x]() {
    x++;
};
```

### 默认值捕获

```cpp
auto f = [=]() {
    std::cout << x << '\n';
};
```

### 默认引用捕获

```cpp
auto f = [&]() {
    x++;
};
```

## 18.3 Lambda 常见用途

### 自定义排序

```cpp
std::sort(nums.begin(), nums.end(), [](int a, int b) {
    return a > b;
});
```

### 作为回调

```cpp
std::function<void()> callback = []() {
    std::cout << "callback\n";
};
```

### STL 算法

```cpp
std::for_each(nums.begin(), nums.end(), [](int x) {
    std::cout << x << '\n';
});
```

## 18.4 捕获悬空问题

错误：

```cpp
std::function<void()> make_func() {
    int x = 10;
    return [&]() {
        std::cout << x << '\n';
    };
}
```

函数返回后，`x` 已失效，Lambda 中引用悬空。

正确：

```cpp
return [x]() {
    std::cout << x << '\n';
};
```

---

# 19. 现代 C++ 常用特性

## 19.1 C++11 常用特性

| 特性         | 示例                       |
| ------------ | -------------------------- |
| `auto`       | `auto x = 10;`             |
| 范围 for     | `for (auto x : nums)`      |
| Lambda       | `[](int x){ return x; }`   |
| 右值引用     | `T&&`                      |
| 移动语义     | `std::move`                |
| 智能指针     | `unique_ptr`、`shared_ptr` |
| `nullptr`    | 空指针                     |
| `enum class` | 强类型枚举                 |
| `constexpr`  | 编译期常量表达式           |
| `thread`     | 标准线程库                 |

## 19.2 C++14 常用特性

- 泛型 Lambda
- `std::make_unique`
- 返回类型推导增强
- 变量模板

示例：

```cpp
auto add = [](auto a, auto b) {
    return a + b;
};
```

## 19.3 C++17 常用特性

### 结构化绑定

```cpp
std::pair<int, std::string> p = {1, "Tom"};
auto [id, name] = p;
```

### `if constexpr`

```cpp
template <typename T>
void print(T value) {
    if constexpr (std::is_integral_v<T>) {
        std::cout << "int-like\n";
    } else {
        std::cout << "other\n";
    }
}
```

### `std::optional`

```cpp
#include <optional>

std::optional<int> find_value(bool ok) {
    if (ok) return 10;
    return std::nullopt;
}
```

### `std::variant`

```cpp
#include <variant>

std::variant<int, std::string> v = 10;
v = "hello";
```

### `std::filesystem`

```cpp
#include <filesystem>

for (const auto& entry : std::filesystem::directory_iterator(".")) {
    std::cout << entry.path() << '\n';
}
```

## 19.4 C++20 常用特性

### Concepts

```cpp
#include <concepts>

template <std::integral T>
T add(T a, T b) {
    return a + b;
}
```

### Ranges

```cpp
#include <ranges>
#include <vector>

for (int x : nums | std::views::filter([](int x) { return x % 2 == 0; })) {
    std::cout << x << '\n';
}
```

### 协程

C++20 引入协程基础设施，但标准库直接可用能力较底层，工程中常依赖框架封装。

### Modules

模块用于替代部分头文件机制，但工程普及仍受编译器和构建系统支持影响。

## 19.5 C++23 了解

C++23 增强了标准库和语言体验，例如：

- `std::expected`
- `std::print`
- `std::flat_map`、`std::flat_set`
- `std::mdspan`
- `std::ranges` 更多增强
- `deducing this`

实际项目要根据编译器支持情况使用。

## 19.6 C++26 前沿了解

C++26 是下一代标准，包含静态反射、契约、更多并发和库设施等方向。工程中短期仍应以 `C++17 / C++20 / C++23` 为主。

---

# 20. C++内存模型与对象模型

## 20.1 程序内存区域

常见区域：

```text
代码段：函数机器指令
只读数据段：字符串字面量、常量数据
数据段：已初始化全局变量、静态变量
BSS段：未初始化全局变量、静态变量
堆：动态分配内存
栈：局部变量、函数调用帧
```

## 20.2 对象存储位置

栈对象：

```cpp
Student stu;
```

堆对象：

```cpp
Student* stu = new Student();
delete stu;
```

现代 C++ 推荐：

```cpp
auto stu = std::make_unique<Student>();
```

## 20.3 `new` 和 `delete`

```cpp
int* p = new int(10);
delete p;
```

数组：

```cpp
int* arr = new int[10];
delete[] arr;
```

注意：`new[]` 必须配 `delete[]`，`new` 必须配 `delete`。

## 20.4 `malloc` 和 `new` 区别

| 对比     | `malloc`     | `new`               |
| -------- | ------------ | ------------------- |
| 所属     | C 标准库函数 | C++ 运算符          |
| 返回     | `void*`      | 具体类型指针        |
| 构造函数 | 不调用       | 调用                |
| 失败     | 返回 `NULL`  | 抛 `std::bad_alloc` |
| 释放     | `free`       | `delete`            |

C++ 中不建议用 `malloc` 创建对象，因为不会调用构造函数。

## 20.5 对象模型与虚函数表

含虚函数的对象通常包含隐藏的虚表指针：

```cpp
class Base {
public:
    virtual void f();
};
```

对象内存中可能有：

```text
[vptr][普通成员变量...]
```

`vptr` 指向类对应的虚函数表，虚函数调用通过虚表完成动态绑定。

## 20.6 对齐与填充

```cpp
struct A {
    char c;
    int i;
};
```

`sizeof(A)` 通常不是 `5`，可能是 `8`，因为存在内存对齐。

优化成员顺序：

```cpp
struct Good {
    int i;
    char c1;
    char c2;
};
```

---

# 21. C++并发编程基础

## 21.1 线程

头文件：

```cpp
#include <thread>
```

示例：

```cpp
#include <iostream>
#include <thread>

void worker() {
    std::cout << "worker\n";
}

int main() {
    std::thread t(worker);
    t.join();
    return 0;
}
```

## 21.2 `join` 和 `detach`

```cpp
t.join();   // 等待线程结束
t.detach(); // 分离线程，后台运行
```

注意：`std::thread` 对象销毁前，如果仍然 `joinable()` 且没有 `join()` 或 `detach()`，程序会调用 `std::terminate()`。

## 21.3 互斥锁

```cpp
#include <mutex>

std::mutex mtx;
int counter = 0;

void increment() {
    std::lock_guard<std::mutex> lock(mtx);
    counter++;
}
```

`std::lock_guard` 使用 RAII 自动加锁和解锁。

## 21.4 `std::unique_lock`

```cpp
std::unique_lock<std::mutex> lock(mtx);
```

比 `lock_guard` 更灵活，可以手动 `lock()`、`unlock()`，也能配合条件变量。

## 21.5 条件变量

```cpp
#include <condition_variable>
#include <mutex>
#include <queue>

std::mutex mtx;
std::condition_variable cv;
std::queue<int> q;

void consumer() {
    std::unique_lock<std::mutex> lock(mtx);
    cv.wait(lock, [] { return !q.empty(); });
    int value = q.front();
    q.pop();
}
```

## 21.6 原子操作

```cpp
#include <atomic>

std::atomic<int> counter{0};

void increment() {
    counter++;
}
```

原子变量避免数据竞争，但不等于能解决所有并发设计问题。

## 21.7 `future` 和 `async`

```cpp
#include <future>

int task() {
    return 42;
}

int main() {
    auto fut = std::async(std::launch::async, task);
    std::cout << fut.get() << '\n';
}
```

## 21.8 数据竞争

多个线程同时访问同一对象，其中至少一个线程写入，且没有同步，就可能发生数据竞争。

数据竞争会导致未定义行为。

---

# 22. 文件操作与流

## 22.1 文件输出

```cpp
#include <fstream>

std::ofstream ofs("data.txt");
ofs << "hello\n";
```

## 22.2 文件输入

```cpp
#include <fstream>
#include <string>

std::ifstream ifs("data.txt");
std::string line;

while (std::getline(ifs, line)) {
    std::cout << line << '\n';
}
```

## 22.3 二进制文件

```cpp
std::ofstream ofs("data.bin", std::ios::binary);
int x = 123;
ofs.write(reinterpret_cast<const char*>(&x), sizeof(x));
```

读取：

```cpp
std::ifstream ifs("data.bin", std::ios::binary);
int x;
ifs.read(reinterpret_cast<char*>(&x), sizeof(x));
```

注意：二进制文件受大小端、结构体对齐、平台字节数影响，不适合直接作为跨平台协议。

---

# 23. 多文件工程、CMake 与库

## 23.1 项目结构

```text
cpp_project/
  ├── CMakeLists.txt
  ├── include/
  │   └── student.h
  ├── src/
  │   ├── main.cpp
  │   └── student.cpp
  └── tests/
```

## 23.2 头文件

`student.h`

```cpp
#pragma once

#include <string>

class Student {
public:
    Student(std::string name, int age);
    void print() const;

private:
    std::string name_;
    int age_;
};
```

## 23.3 源文件

`student.cpp`

```cpp
#include "student.h"
#include <iostream>
#include <utility>

Student::Student(std::string name, int age)
    : name_(std::move(name)), age_(age) {}

void Student::print() const {
    std::cout << name_ << " " << age_ << '\n';
}
```

`main.cpp`

```cpp
#include "student.h"

int main() {
    Student stu("Tom", 18);
    stu.print();
    return 0;
}
```

## 23.4 CMake 基础

`CMakeLists.txt`

```cmake
cmake_minimum_required(VERSION 3.16)
project(cpp_project LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(app
    src/main.cpp
    src/student.cpp
)

target_include_directories(app PRIVATE include)
```

构建：

```bash
cmake -S . -B build
cmake --build build
```

运行：

```bash
./build/app
```

## 23.5 静态库

```cmake
add_library(student STATIC src/student.cpp)
target_include_directories(student PUBLIC include)

add_executable(app src/main.cpp)
target_link_libraries(app PRIVATE student)
```

## 23.6 动态库

```cmake
add_library(student SHARED src/student.cpp)
```

## 23.7 头文件中应该放什么

适合放：

- 类声明
- 函数声明
- 模板定义
- `inline` 函数定义
- 常量表达式

不适合放：

- 普通全局变量定义
- 非 `inline` 普通函数定义
- 大量不必要的头文件包含

---

# 24. 调试、性能分析与常见工具

## 24.1 GDB / LLDB

编译：

```bash
g++ -g -O0 main.cpp -o main
```

调试：

```bash
gdb ./main
```

常用命令：

| 命令         | 作用               |
| ------------ | ------------------ |
| `break main` | 打断点             |
| `run`        | 运行               |
| `next`       | 下一行，不进入函数 |
| `step`       | 下一行，进入函数   |
| `print x`    | 打印变量           |
| `backtrace`  | 查看调用栈         |
| `continue`   | 继续运行           |

## 24.2 Sanitizer

```bash
g++ -std=c++17 -g -O0 -fsanitize=address,undefined main.cpp -o main
```

可发现：

- 越界访问
- 使用释放后内存
- 重复释放
- 未定义行为
- 部分内存泄漏

## 24.3 Valgrind

```bash
valgrind --leak-check=full ./main
```

适合 Linux 下检查内存泄漏和非法访问。

## 24.4 性能分析

常见工具：

| 工具                 | 说明           |
| -------------------- | -------------- |
| `perf`               | Linux 性能分析 |
| `gprof`              | 函数级性能统计 |
| `heaptrack`          | 堆内存分析     |
| `valgrind/callgrind` | 调用图分析     |
| `clang-tidy`         | 静态检查       |
| `cppcheck`           | 静态检查       |

## 24.5 格式化工具

常用：

- `clang-format`
- `clang-tidy`
- `include-what-you-use`

---

# 25. C++与 C / Java 的核心区别

## 25.1 C++ 和 C 的区别

| 对比     | C                  | C++                          |
| -------- | ------------------ | ---------------------------- |
| 编程范式 | 面向过程           | 多范式                       |
| 面向对象 | 不原生支持         | 原生支持                     |
| 泛型     | 主要靠宏和 `void*` | 模板                         |
| 字符串   | `char*` / 字符数组 | `std::string`                |
| 容器     | 手写或第三方库     | STL                          |
| 内存管理 | `malloc/free`      | `new/delete`、智能指针、RAII |
| 异常     | 无标准异常机制     | 支持异常                     |
| 函数重载 | 不支持             | 支持                         |

## 25.2 C++ 和 Java 的区别

| 对比       | C++                    | Java                     |
| ---------- | ---------------------- | ------------------------ |
| 运行方式   | 编译成本地机器码       | 字节码运行在 JVM         |
| 内存管理   | 手动 + RAII + 智能指针 | GC 自动管理              |
| 指针       | 支持显式指针           | 不暴露指针               |
| 多继承     | 支持类多继承           | 类单继承，接口多实现     |
| 泛型       | 编译期模板             | 类型擦除为主             |
| 多态       | 虚函数才动态绑定       | 普通实例方法默认动态绑定 |
| 运算符重载 | 支持                   | 不支持                   |
| 性能控制   | 更强                   | 更依赖 JVM               |
| 工程场景   | 系统、高性能、底层     | 企业后端、平台型应用     |

## 25.3 Java 学习者学 C++ 的重点

1. 不要把所有对象都写成 `new`。
2. 优先使用栈对象、`std::vector`、`std::string`、智能指针。
3. 理解对象生命周期和析构函数。
4. 理解拷贝、移动、引用、指针的区别。
5. 理解虚函数和 Java 方法动态绑定的不同。
6. 理解模板不是 Java 泛型，它发生在编译期。

---

# 26. C++高频面试题

## 26.1 C++ 三大特性是什么

- 封装：隐藏实现细节，对外暴露接口。
- 继承：复用和扩展已有类。
- 多态：同一接口在不同对象上表现出不同行为。

C++ 中运行时多态主要通过虚函数实现。

## 26.2 引用和指针区别

引用必须初始化、不能重新绑定、通常不能为空；指针可以不初始化、可以改变指向、可以为 `nullptr`。

## 26.3 `new/delete` 和 `malloc/free` 区别

`new` 会分配内存并调用构造函数，`delete` 会调用析构函数并释放内存。`malloc/free` 只处理原始内存，不会调用构造和析构。

## 26.4 虚函数实现原理

有虚函数的类通常包含虚表指针 `vptr`，指向虚函数表 `vtable`。通过基类指针或引用调用虚函数时，会根据对象真实类型在虚表中查找并调用对应函数。

## 26.5 为什么基类析构函数要写成虚函数

如果通过基类指针删除派生类对象，而基类析构函数不是虚函数，可能只调用基类析构，不调用派生类析构，导致资源泄漏。

## 26.6 重载、重写、隐藏区别

- 重载：同一作用域，函数名相同，参数不同。
- 重写：子类重写父类虚函数，函数签名一致。
- 隐藏：子类定义同名函数，会隐藏父类同名函数。

## 26.7 深拷贝和浅拷贝区别

浅拷贝只复制指针值，多个对象共享同一资源，容易重复释放。深拷贝会重新分配资源并复制内容。

## 26.8 移动语义解决什么问题

移动语义避免不必要的深拷贝，通过接管临时对象资源提升性能，尤其适合管理堆内存、文件句柄、容器等资源的对象。

## 26.9 `std::move` 是什么

`std::move` 不移动任何东西，只是把表达式转换为右值引用，使移动构造或移动赋值有机会被调用。

## 26.10 `unique_ptr`、`shared_ptr`、`weak_ptr` 区别

- `unique_ptr`：独占所有权，不可拷贝，可移动。
- `shared_ptr`：共享所有权，引用计数为 0 时释放资源。
- `weak_ptr`：弱引用，不增加引用计数，用于解决循环引用。

## 26.11 `vector` 扩容机制

`vector` 空间不足时会重新申请更大的连续空间，把原元素移动或拷贝过去，然后释放旧空间。扩容会导致原迭代器、指针和引用失效。

## 26.12 `map` 和 `unordered_map` 区别

| 对比       | `map`        | `unordered_map` |
| ---------- | ------------ | --------------- |
| 底层       | 红黑树       | 哈希表          |
| 是否有序   | 有序         | 无序            |
| 查找复杂度 | `O(log n)`   | 平均 `O(1)`     |
| 适合场景   | 需要有序遍历 | 高频查找        |

## 26.13 模板和 Java 泛型区别

C++ 模板是编译期实例化，不同类型会生成不同代码；Java 泛型主要基于类型擦除，运行期很多泛型类型信息不可见。

## 26.14 什么是 RAII

RAII 是把资源生命周期绑定到对象生命周期的技术。对象构造时获取资源，析构时释放资源，可以保证异常情况下也能正确释放资源。

## 26.15 什么是对象切片

把派生类对象按值赋给基类对象时，只保留基类部分，派生类特有部分被切掉。

```cpp
Derived d;
Base b = d;  // 对象切片
```

避免：使用引用或指针。

```cpp
Base& b = d;
Base* p = &d;
```

---

# 27. 常见错误速查表

| 错误                  | 原因                          | 解决                          |
| --------------------- | ----------------------------- | ----------------------------- |
| 内存泄漏              | `new` 后忘记 `delete`         | 使用智能指针和 RAII           |
| 重复释放              | 多个指针管理同一资源          | 明确所有权，使用 `unique_ptr` |
| 悬空引用              | 返回局部变量引用              | 不返回局部对象引用或地址      |
| 虚析构缺失            | 基类指针删除派生类对象        | 基类析构写成 `virtual`        |
| 对象切片              | 派生类按值赋给基类            | 使用引用或指针                |
| 迭代器失效            | 容器插入删除后继续用旧迭代器  | 使用返回的新迭代器            |
| Lambda 悬空引用       | 捕获局部变量引用后逃逸        | 使用值捕获                    |
| 多线程数据竞争        | 多线程无同步读写共享变量      | 使用互斥锁或原子变量          |
| `shared_ptr` 循环引用 | 两个对象互相持有 `shared_ptr` | 一侧改用 `weak_ptr`           |
| 模板链接错误          | 模板定义放 `.cpp`             | 模板定义放头文件              |

---

# 28. 学习建议与后续方向

## 28.1 入门练习

建议实现：

- 学生管理系统
- 简单通讯录
- 文件版日志系统
- 计算器
- 字符串工具类
- 日期类
- 矩阵类

## 28.2 STL 练习

建议重点刷：

- `vector` 动态数组
- `map` 统计频率
- `unordered_map` 哈希查找
- `priority_queue` TopK
- `sort` 自定义排序
- `set` 去重和有序维护
- `deque` 滑动窗口

## 28.3 面向对象练习

建议实现：

- 图形类：`Shape`、`Circle`、`Rectangle`
- 动物类：`Animal`、`Dog`、`Cat`
- 文件资源封装类
- 数据库连接 RAII 包装类
- 简单线程池

## 28.4 现代 C++ 练习

建议实现：

- 使用 `unique_ptr` 管理二叉树
- 使用 `shared_ptr` 和 `weak_ptr` 建图结构
- 使用 Lambda 和 STL 算法重写循环逻辑
- 使用 `optional` 表示可能失败的查询
- 使用 `variant` 表示多类型结果
- 使用 `thread`、`mutex` 实现生产者消费者

## 28.5 工程方向

后续可以继续学习：

| 方向        | 内容                             |
| ----------- | -------------------------------- |
| CMake       | 现代 C++ 项目构建                |
| GoogleTest  | 单元测试                         |
| Boost       | 准标准库级别组件                 |
| 网络编程    | `asio`、Socket、IO 多路复用      |
| 高性能      | 内存池、对象池、无锁队列         |
| 并发        | 线程池、协程、原子、内存序       |
| 游戏开发    | Unreal Engine、渲染基础          |
| 系统开发    | Linux C++、数据库内核、存储引擎  |
| AI 推理底层 | TensorRT、ONNX Runtime、CUDA C++ |

---

# 附录 A：推荐编译命令

## 学习阶段

```bash
g++ -std=c++17 -Wall -Wextra main.cpp -o main
```

## 调试阶段

```bash
g++ -std=c++17 -Wall -Wextra -g -O0 main.cpp -o main
```

## 内存检查

```bash
g++ -std=c++17 -Wall -Wextra -g -O0 -fsanitize=address,undefined main.cpp -o main
```

## C++20

```bash
g++ -std=c++20 -Wall -Wextra -g -O0 main.cpp -o main
```

---

# 附录 B：C++核心概念一句话总结

- `引用`：变量的别名。
- `指针`：保存地址的变量。
- `类`：封装数据和行为的用户自定义类型。
- `对象`：类的实例。
- `构造函数`：对象创建时自动调用。
- `析构函数`：对象销毁时自动调用。
- `虚函数`：支持运行时多态的成员函数。
- `纯虚函数`：没有实现的虚函数，使类成为抽象类。
- `RAII`：资源生命周期绑定对象生命周期。
- `智能指针`：自动管理动态对象生命周期的类模板。
- `模板`：编译期泛型机制。
- `STL`：容器、迭代器、算法等标准库组件。
- `移动语义`：转移资源所有权，避免昂贵拷贝。
- `Lambda`：匿名函数对象。
- `迭代器`：泛化指针，用于访问容器元素。
- `异常`：错误传播机制。
- `CMake`：跨平台构建系统。


