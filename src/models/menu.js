import Config from '../services/HttpService';
const { config, httpPost } = Config

export default {

  namespace: 'menu',

  state: {
    menuList:[
      {
        title:'Life',
        key:'Life',
        link:'/',
        icon:'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
        selectedIcon:'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
      },
      {
        title:'Koubei',
        key:'Koubei',
        link:'/secondP',
        icon:'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
        selectedIcon:'https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
      },
      {
        title:'Friend',
        key:'Friend',
        link:'/',
        icon:'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
        selectedIcon:'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
      },
      {
        title:'My',
        key:'My',
        link:'/',
        icon:'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
        selectedIcon:'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
      }
    ]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
        }
      });
    },
  },

  effects: {
    * userPower({ payload }, { select, call, put }) {

      const indexP = yield select(({ indexP }) => indexP)

      const { data } = yield call(httpPost, config.WGjiekou, payload);

      var list = indexP.list
      list[1].name = data
      yield put({
        type: 'updatePayload',
        payload: {
          list
        }
      })
    },
  },

  reducers: {
    updatePayload(state, action) {
      return {
        ...state, ...action.payload,
      };
    },
    showLoading(state) {
      return { ...state, loading: true };
    },
    hideLoading(state) {
      return { ...state, loading: false };
    }
  },

};
