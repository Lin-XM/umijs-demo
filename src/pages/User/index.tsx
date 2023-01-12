import React, { useEffect } from 'react';

const User = () => {
  useEffect(() => {
    // setTimeout(() => {
    //   history.push('/home');
    // }, 10000);
  }, []);

  return (
    <div>
      <h3>User Page 测试页面</h3>
      <div>
        <button>数据</button>
      </div>
    </div>
  );
};
export default User;
