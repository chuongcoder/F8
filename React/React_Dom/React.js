// // *DOCUMENT.CREATEELEMENT
// // Get the element with id 'root'
// const root = document.getElementById('root');

// const { element } = require("prop-types")

// // const { useLayoutEffect } = require("react");

// // Create an <h1> element
// const h1 = document.createElement('h1');

// // Add text content to the <h1> element
// h1.innerText = 'Hello guys!';

// // Set id attribute of <h1> element to 'heading'
// h1.id = 'heading';

// // Set class names of <h1> element to 'test' and 'tes2'
// h1.className = 'test tes2';

// // Set color of text within <h1> element to red
// h1.style.color = 'red';

// // Set background color of <h1> element to blue and font color to white
// Object.assign(h1.style, {
//     color: 'blue',
//     backgroundColor: '#333'
// });

// // Append the <h1> element to the element with id 'root'
// root.appendChild(h1);



// * REACT.CREATEELEMENT(type,properties,children,children2,...)
// React.createElement là một phương thức trong React được sử dụng để tạo các elements React. 
// Nó nhận vào ít nhất ba tham số: loại element (component hoặc HTML tag)
// , các thuộc tính của element đó (props), và các children của element đó (nếu có).
// type: The type of element you want to create, such as 'div', 'span', 'h1', etc.
// - Component : 
// React.Fragment:

// Chức năng: Cho phép bạn nhóm nhiều phần tử con mà không cần thêm một phần tử DOM ngoài cùng.
// Ví dụ:
// jsx
// Copy code
// return (
//   <React.Fragment>
//     <ChildComponent1 />
//     <ChildComponent2 />
//   </React.Fragment>
// );
// React.StrictMode:

// Chức năng: Cung cấp công cụ để giúp phát hiện các vấn đề và cảnh báo trong quá trình phát triển ứng dụng React, chẳng hạn như cảnh báo về các lifecycle deprecated, side effects, ... Nó không ảnh hưởng đến sản phẩm khi được phát hành.
// Ví dụ:
// jsx
// Copy code
// return (
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// React.Component:

// Chức năng: Là cơ sở để định nghĩa các class components trong React.
// Ví dụ:
// jsx
// Copy code
// class MyComponent extends React.Component {
//   render() {
//     return <h1>Hello, World!</h1>;
//   }
// }
// React.PureComponent:

// Chức năng: Tương tự như React.Component, nhưng sử dụng shallow comparison để sẽ không bắt đầu lại mọi thứ khi trạng thái (state) và thuộc tính (props) không thay đổi.
// Ví dụ:
// jsx
// Copy code
// class MyPureComponent extends React.PureComponent {
//   render() {
//     return <h1>Hello, World!</h1>;
//   }
// }
// React.memo:

// Chức năng: Một hàm cao cấp để tối ưu hóa các thành phần functional bằng cách lưu kết quả của nó dựa trên props.
// Ví dụ:
// jsx
// Copy code
// const MyComponent = React.memo(function MyComponent(props) {
//   return <h1>Hello, {props.name}!</h1>;
// });
// React.useState:

// Chức năng: Hook để sử dụng state trong functional components.
// Ví dụ:
// jsx
// Copy code
// const [count, setCount] = React.useState(0);
// React.useEffect:

// Chức năng: Hook để thực hiện các side effect trong functional components, tương tự như lifecycle methods trong class components.
// Ví dụ:
// jsx
// Copy code
// React.useEffect(() => {
//   // Effect code here
//   return () => {
//     // Clean-up code here
//   };
// }, [dependency]);
// React.Children:

// Chức năng: Các util functions để xử lý children props của các component trong React.
// Ví dụ:
// jsx
// Copy code
// React.Children.map(children, (child) => {
//   return <ModifiedChild>{child}</ModifiedChild>;
// });
// React.createContext:

// Chức năng: Tạo một context trong React để chia sẻ dữ liệu giữa các thành phần không liên quan.
// Ví dụ:
// jsx
// Copy code
// const MyContext = React.createContext(defaultValue);
// React.lazy và React.Suspense:

// Chức năng: Cho phép tải lười biếng các thành phần (lazy load) để giảm thời gian tải trang và sử dụng fallback UI trong quá trình tải.
// Ví dụ:
// jsx
// Copy code
// const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

// <React.Suspense fallback={<LoadingIndicator />}>
//   <MyLazyComponent />
// </React.Suspense>

// props: An object containing properties (or attributes) you want to assign to the
//  element. This can include things like className, style, onClick, etc.
// children: The content you want to place inside the element. This can be a string,
//  another React element, or an array of React elements.
// This seems like a comment mentioning React syntax, not applicable in this vanilla JavaScript code.
// Ex:
// //code DOM 
// const h1DOM = document.createElement('h1')

// h1DOM.title = 'hello'
// h1DOM.className = 'heading'
// h1DOM.innerText = 'Hello guys !'

// document.body.appendChild(h1DOM)

// code React 
// const h1React = React.createElement('h1',{
//     title:'hello',
//     className:'heading'
// },'Hello Guys! ')

// console.dir(h1DOM)
// console.log(h1React)

// Ex: Tao : 
/* <ul>
    <li>Javascripts</li>
    <li>ReactJS</li>
</ul> */

//DOM
// const ulDOM = document.createElement('ul')
// ulDOM.id = 'ul-id'
// ulDOM.style = 'color:blue;font-size: 15px'

// const liDOM1 = document.createElement('li')
// liDOM1.innerText = 'Javascript'
// liDOM1.id = 'li-1'

// const liDOM2 = document.createElement('li')
// liDOM2.innerText = 'ReactJS'

// ulDOM.appendChild(liDOM1)
// ulDOM.appendChild(liDOM2)

// document.body.appendChild(ulDOM)

// //React
// const ulReact = React.createElement(
//     'ul',
//     {
//         id:'ul-id',
//         style:'color:blue;font-size: 15px'
//     },
//     React.createElement('li',{id:'li-1'},'Javascript'),
//     React.createElement('li',null,'ReactJS')
// )

// console.log(ulReact)


// * REACT DOM 
// - SYN: 
// BT: Tao bang DOM va React 
/* <div class="post-item">
<h2 title="Hoc React">ReactJS</h2>
<p>Hoc ReactJS tu co ban toi NC</p>
</div> */

// DOM 
// const dDOM = document.createElement('div');
// dDOM.className = 'post-item'

// const h2DOM = document.createElement('h2');

// h2DOM.title = 'Hoc React';
// h2DOM.innerText = 'ReactJS';

// const pDOM = document.createElement('p');
// pDOM.innerText = 'Hoc ReactJS tu co ban toi NC';

// dDOM.appendChild(h2DOM);
// dDOM.appendChild(pDOM);

// document.body.appendChild(dDOM)


// React 
// const postItem = React.createElement(
//     'div',
//     {
//         className:'post-item',
//     },
//     React.createElement(
//         'h2',
//         {
//             title:'Hoc React tai F8'
//         },
//         'Hoc ReactJS'
//     ),
//     React.createElement('p',{},'Hoc ReactJS tu co ban toi NC')
// )


// // React@17 
// // const root = document.getElementById('root')
// // ReactDOM.render(postItem,root) 
// (container,element,callback)

// // React@18 
// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(postItem) (element)


// *JSX(Javascript XML) : (ko phai HTML) => code html in file js 
// Ex:
// React 
// const ulReact = React.createElement(
//     'ul',
//     null,
//     React.createElement('li',null,'Javascript'),
//     React.createElement('li',null,'ReactJS')
// )

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(ulReact)
// c2 
// ReactDOM.render(ulReact,document.getElementById('root'))
// {code JS}

// JSX : => viet ma HTML => auto convert to JS (dung babel :  https://bit.ly/2VOIMN7) 
// khi: <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> dc nhung
// => tim tag code js co type text/babel(ko phai code js) => convert to javascript 

// const reactCourse = 'ReactJS'
// const ul = <ul>
//     <li>Javascripts</li>
//     <li>{reactCourse}</li>
// </ul> 

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(ul)

// Ex:
// const course = [
//     {
//         name: 'JS'
//     },
//     {
//         name: 'ReactJS'
//     }
// ]

// // JSX (chen code HTML)
// const CourseList = () => {
//     return (
//         <ul>
//             {
//                 course.map((course, index) => {
//                     return <li key={index}>{course.name}</li>
//                 })
//             }
//         </ul>
//     );
// };

// // React 18
// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(<CourseList/>)
// React 17 
// ReactDOM.render(<CourseList />, document.getElementById('root'));



// JS(dung React tao element ul co 2 tag li ben trong(map))
// var Courselist = function CourseList() {
//     return React.createElement(
//         'ul',
//         null,
//         course.map(function (course) {
//             return React.createElement(
//                 'li',
//                 null,
//                 course.name
//             );
//         })
//     );
// };

// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container)
// root.render(Courselist())





// Ex:
// Khi muốn viết code JSX cùng code HTML thì phải đặt đoạn code JSX trong cặp {}.
//  Nên cú pháp đúng phải là style={{ color: 'red' }}.
// HTML
// const headingElement = <h1 style={{ color: 'red' }}>{title}</h1>;
// const title = 'Fullstack';

// Js 
/*
 var headingElement = React.createElement(
    'h1',
    {
        style:{color:red}
    },
    title
 )
 var title = 'F8'
*/ 
