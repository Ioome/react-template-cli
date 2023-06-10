/**
 * @author sutton
 * @date 2023/6/3
 * @description 常量类
 */
class Constants {
    public static  MAX_VALUE = 100;
    public static  MIN_VALUE = 0;

    public static  COLORS = {
        RED: '#FF0000', GREEN: '#00FF00', BLUE: '#0000FF'
    };
    public static  MAGIC_VALUE = {
        MAX: Constants.MAX_VALUE, MIN: Constants.MIN_VALUE
    };
}

/**
 * 用户信息
 * @type {[{occupation: string, gender: string, name: string, age: number},{occupation: string, gender: string, name: string, age: number},{occupation: string, gender: string, name: string, age: number},{occupation: string, gender: string, name: string, age: number},{occupation: string, gender: string, name: string, age: number}]}
 */
const UserProfiles = [
    {
        name: 'John',
        age: 25,
        gender: 'male',
        occupation: 'engineer'
    },
    {
        name: 'Emily',
        age: 30,
        gender: 'female',
        occupation: 'teacher'
    },
    {
        name: 'Michael',
        age: 45,
        gender: 'male',
        occupation: 'doctor'
    },
    {
        name: 'Sophia',
        age: 28,
        gender: 'female',
        occupation: 'lawyer'
    },
    {
        name: 'Daniel',
        age: 32,
        gender: 'male',
        occupation: 'architect'
    }
];


/**
 * 信息
 * @type {[{speaker: string, message: string},{speaker: string, message: string}]}
 */
const Info = [
    {
        speaker: 'Alice', // 引用：Alice
        message: 'Hey, have you heard about the new movie coming out next week?' // 对话内容：嘿，你听说下周上映的新电影了吗？
    },
    {
        speaker: 'Bob', // 引用：Bob
        message: 'Yes, I saw the trailer. It looks really exciting! I can\'t wait to watch it.' // 对话内容：是的，我看了预告片。看起来真的很令人兴奋！我迫不及待想去看。
    }
];


export { Constants, Info, UserProfiles };