import React from 'react';
import { Button, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraScreen extends React.Component {
  state = {
    permision: null,
    type: Camera.Constants.Type.back
  };

  async componentDidMount() {
    var { status } = await Permissions.askAsync(Permissions.CAMERA);
    var permision = status === 'granted' ? true : false;
    this.setState({ permision });
  }

  onPictureSaved = async photo => {
    console.log(photo.uri);

    var data = new FormData();

    await data.append('photo', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'MyPicture'
    });

    console.log(data);

    //pensez a mettre votre IP backend !!
    await fetch('http://10.69.210.108:3000/upload', {
      method: 'post',
      body: data
    }).then(res => {
      console.log(res);
    });
  };
  render() {
    if (this.state.permision === null) {
      return <View />;
    } else if (this.state.permision === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ flex: 1 }}
            type={this.state.type}
          ></Camera>
          <Button
            title='snapshot'
            onPress={() => {
              if (this.camera) {
                this.camera.takePictureAsync({
                  onPictureSaved: this.onPictureSaved
                });
              }
            }}
          />
        </View>
      );
    }
  }
}
