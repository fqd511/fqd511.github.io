var contents = [
  {
    id: "blog",
    title: "记录与说说",
    desc: "有趣的生活片段<br/>有理的观点论断<br/>有用的技术手段<br/>有空的瞎扯淡",
    label: ["general"],
    placement: "cover",
  },
  {
    id: "tea",
    title: "下午茶吃什么",
    desc: "有天下午茶的时候行政小姐姐抱怨太难了，每天都不知道买什么，于是第二天。。",
    label: ["general"],
    placement: "cover",
  },
];

var elementFragment = document.createDocumentFragment();

contents.forEach((content) => {
  var link = document.createElement("a");
  link.href = "https://" + content.id + ".fanqidi.com";
  link.title = content.desc;
  link.classList.add("item");
  var name = document.createTextNode(content.title);
  link.append(name);
  elementFragment.append(link);
});
var container = document.getElementById("container");
container.append(elementFragment);
