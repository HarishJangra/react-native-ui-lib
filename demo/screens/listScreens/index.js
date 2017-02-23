import {Navigation} from 'react-native-navigation';
import BasicListScreen from './BasicListScreen';
import ConversationListScreen from './ConversationListScreen';

Navigation.registerComponent('example.lists.BasicListScreen', () => BasicListScreen);
Navigation.registerComponent('example.lists.ConversationListScreen', () => ConversationListScreen);