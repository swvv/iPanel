import { UsbOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = 'iPanel';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <UsbOutlined />,
          href: 'https://github.com/swvv',
          blankTarget: true,
        },
      ]}
    />
  );
};
