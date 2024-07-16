import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Banner from './Component/Banner';
import Block from './Component/Block';
import Button from './Component/Button';
import TextInput from './Component/TextInput';
import { ThemeProvider, useTheme } from './Component/Theme';

const ThemedButton = () => {
  const { toggleTheme } = useTheme();
  return <Button onPress={toggleTheme} title="Đổi Theme" />;
};

const App = () => {
  const { theme } = useTheme();

  const styles = getStyles(theme);

  return (
    <ScrollView style={styles.container}>
      <Banner uri_img="https://i.imgur.com/gowMz8A.jpeg" title="Banner 1" />
      <ThemedButton />
      <Block title="Thông tin cá nhân">
        <TextInput placeholder="Họ và tên" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Số điện thoại" />
      </Block>
      <Block title="Thông tin khóa học">
        <TextInput placeholder="Tên khóa học" />
        <TextInput placeholder="Mã khóa học" />
      </Block>
      <Block title="Thông tin liên hệ">
        <TextInput placeholder="Địa chỉ" />
        <TextInput placeholder="Số điện thoại liên hệ" />
      </Block>
      <Button title="Đăng ký" />
    </ScrollView>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    },
  });

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
