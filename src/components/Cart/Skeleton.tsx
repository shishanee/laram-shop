import React from "react";
import { Skeleton } from "antd";
import styles from "./Cart.module.css";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
const CartSkeleton = () => (
  <div>
    <div className={styles.skeletonFlex}>
      <SkeletonAvatar
        shape="square"
        style={{ width: 180, height: 200, marginRight: 20 }}
      />
      <div>
        <Skeleton
          active
          title={false}
          paragraph={{ rows: 2, width: [200, 180] }}
          style={{marginTop: 5}}
        />
        <div className={styles.skeletonFlex}>
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 1, width: [100] }}
            style={{ marginTop: 50 }}
          />
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 1, width: [120] }}
            style={{ marginTop: 50, marginLeft: 30 }}
          />
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 1, width: [150] }}
            style={{ marginTop: 50, marginLeft: 30 }}
          />
        </div>
        <div className={styles.skeletonFlex}>
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 1, width: [100] }}
            style={{ marginTop: 60 }}
          />
          <Skeleton
            active
            title={false}
            paragraph={{ rows: 1, width: [60] }}
            style={{ marginTop: 60, marginLeft: 320 }}
          />
        </div>
      </div>
    </div>
    <div className={styles.skeletonFlex}>
      <Skeleton
        active
        title={false}
        paragraph={{ rows: 3, width: [70, 70, 70]}}
        style={{ marginTop: 30, marginLeft: 253 }}
      />
      <Skeleton
        active
        title={false}
        paragraph={{ rows: 3, width: [70, 70, 70] }}
        style={{ marginTop: 30, marginLeft: 300 }}
      />
    </div>
  </div>
);

export default CartSkeleton;

{
  /* <ContentLoader
    speed={2}
    width={600}
    height={330}
    viewBox="0 0 600 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="180" height="200" />
    <rect x="200" y="5" rx="3" ry="3" width="180" height="15" />
    <rect x="200" y="30" rx="3" ry="3" width="160" height="15" />
    <rect x="200" y="90" rx="3" ry="3" width="100" height="20" />
    <rect x="200" y="170" rx="3" ry="3" width="150" height="20" />
    <rect x="550" y="173" rx="3" ry="3" width="60" height="15" />
    <rect x="320" y="90" rx="3" ry="3" width="130" height="20" />
    <rect x="470" y="90" rx="3" ry="3" width="130" height="20" />
    <rect x="300" y="210" rx="3" ry="3" width="60" height="15" />
    <rect x="300" y="230" rx="0" ry="0" width="60" height="15" />
    <rect x="300" y="250" rx="0" ry="0" width="60" height="15" />
    <rect x="540" y="230" rx="3" ry="3" width="60" height="15" />
    <rect x="540" y="210" rx="3" ry="3" width="60" height="15" />
    <rect x="540" y="250" rx="3" ry="3" width="60" height="15" />
  </ContentLoader> */
}
