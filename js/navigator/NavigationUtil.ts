// js/util/NavigationUtil.ts
import {StackActions, NavigationContainerRef} from '@react-navigation/native';

export default class NavigationUtil {
  static navigation: NavigationContainerRef<any>;

  static goPage(params: any, page: string) {
    const navigation = NavigationUtil.navigation || (params || {}).navigation;
    if (!navigation) {
      console.log('NavigationUtil.navigation can not be null');
      return;
    }
    navigation.navigate(page, {...params, navigation: undefined});
  }

  static goBack(navigation: any) {
    navigation.goBack();
  }

  static resetToHomePage(params: any) {
    const {navigation} = params;
    if (!navigation) {
      console.log(
        'NavigationUtil.resetToHomePage: navigation is null or undefined',
      );
      return;
    }
    console.log('NavigationUtil.resetToHomePage: navigating to HomePage');
    navigation.dispatch(StackActions.replace('HomePage', {}));
  }

  static login(params: any = {}) {
    let {navigation} = params;
    if (!navigation) {
      navigation = NavigationUtil.navigation;
    }
    navigation.dispatch(StackActions.replace('LoginPage', {}));
  }
}
