react
reactDom
conciliation

react代码较少  主要是暴露了react一些api
react作为一个对象 有其自身属性
根据代码有
```javascript
	const React = {
    	//提供处理react 相关的children的方法 props.children是一个类数组对象
        Children: {
        	map,
            foreach,
            count,
            toArray,
            only
        },
        
        //指向组件本身的ref api
        createRef,
        
        //组件
        component,
        pureComponent,
        
        //跨组件数据传输
        createContext,
        forwardRef,
        
        //mode
        Fragment: REACT_FRAGMENT_TYPE,
        StrictMode: REACT_STRICT_MODE_TYPE,
        unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,
        unstable_Profiler: REACT_PROFILER_TYPE,
        
        //节点方法
          createElement: __DEV__ ? createElementWithValidation : createElement,
          cloneElement: __DEV__ ? cloneElementWithValidation : cloneElement,
          createFactory: __DEV__ ? createFactoryWithValidation : createFactory,
    
    }
	

```

