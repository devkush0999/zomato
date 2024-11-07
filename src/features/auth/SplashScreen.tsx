import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {useStyles} from 'react-native-unistyles';
import {splashStyles} from '@unistyles/authStyles';

const {styles} = useStyles(splashStyles);
const SplashScreen: FC = () => {
  return (
    <View>
      <Text>
        SplashScreen Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloremque totam voluptatibus labore, aut magni harum aliquam. Est ipsa
        nam odio eos, culpa eum quidem dolor aperiam corrupti modi recusandae
        iure sint molestiae reprehenderit reiciendis dolorem dolores similique
        tempore. Reiciendis exercitationem ratione dolorem sint ea. Repudiandae
        minima iste, expedita dignissimos quas quam id nesciunt quibusdam
        distinctio ad quidem at, est ipsam! Natus praesentium optio esse
        doloremque perspiciatis consequuntur blanditiis facere repellendus
        nostrum, maiores voluptates dolore architecto dolorum magni labore
        incidunt consectetur quisquam mollitia, asperiores aspernatur officiis
        totam, dolorem sed. Eveniet tenetur molestias amet nam ipsam et nemo
        corrupti voluptatem repudiandae sint?
      </Text>
    </View>
  );
};

export default SplashScreen;
