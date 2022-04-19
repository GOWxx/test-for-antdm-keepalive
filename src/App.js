import React from "react";
import {
  List,
  PullToRefresh,
  InfiniteScroll,
  Space,
  Image,
  ProgressBar,
  SearchBar,
  Toast
} from "antd-mobile";

import KeepAlive from "react-activation";

const data = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    name: "罗育平",
    sex: "女",
    des: "胜利街道/幸福西街社区/义宾北街14号楼",
    wzd: 50
  }
];

export default class BuildList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        },
        {
          img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
          name: "罗育平",
          sex: "女",
          des: "胜利街道/幸福西街社区/义宾北街14号楼",
          wzd: 50
        }
      ]
    });
  }
  back = () =>
    Toast.show({
      content: "点击了返回区域",
      duration: 1000
    });

  loadMore = async () => {
    Toast.show("触发loadmore");
    const { data: dataState } = this.state;
    this.setState({
      data: [...dataState, ...data]
    });
  };
  itemclic(item) {
    debugger;
    Toast.show(item.name);
  }

  rowRenderer_ = ({ index, key, style }) => {
    // console.log(index, key, style,'index, key, style')
    const item = data[index];
    return (
      <List.Item
        key={key}
        arrow={false}
        style={style}
        onClick={() => this.itemclic(item)}
        title={
          <Space>
            <div> {item.name}</div>
            <div> {item.sex}</div>
          </Space>
        }
        prefix={
          <Image
            src={item.img}
            style={{ borderRadius: 2 }}
            fit="cover"
            width={70}
            height={70}
          />
        }
        description={
          <Space>
            <div>信息完整度</div>
            <div style={{ width: 100, textAlign: "center" }}>
              <ProgressBar
                percent={50}
                style={{
                  marginTop: 7
                }}
              />
            </div>
            <div>{item.wzd}</div>
          </Space>
        }
      >
        {<div> {item.des}</div>}
      </List.Item>
    );
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 999,
            background: "#ffffff"
          }}
        >
          <SearchBar
            placeholder="请输入内容"
            style={{
              "--background": "#ffffff",
              height: 40,
              marginLeft: 5,
              marginRight: 5
            }}
          />
        </div>
        <div style={{ paddingLeft: 5, paddingRight: 5 }}>
          <KeepAlive>
            <PullToRefresh onRefresh={async () => {}}>
              <List>
                {this.state.data.map((item, index) => (
                  <List.Item key={index}>{item.sex}</List.Item>
                ))}
              </List>
              <InfiniteScroll
                loadMore={this.loadMore}
                threshold={100}
                hasMore={true}
              />
            </PullToRefresh>
          </KeepAlive>
        </div>
      </div>
    );
  }
}
