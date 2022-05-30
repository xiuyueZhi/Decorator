import 'reflect-metadata';

function classDecorator(target: any) {
  target.prototype.decorator = 'decorator';
  console.log('这里是类装饰器');
}

function methodDecorator(): MethodDecorator {
  return (target, key, descriptor) => {
    console.log('方法装饰器');
    // 在类的原型属性 'someMethod' 上定义元数据，key 为 `methodMetaData`，value 为 `b`
    // Reflect.defineMetadata("methodMetaData", "b", target, key);
  };
}

function propertyDecorator(): PropertyDecorator {
  return (target, key) => {
    console.log('属性装饰器，key：', key);
  };
}

function paramDecorator(): ParameterDecorator {
  return (target, key, paraIndex) => {
    console.log('参数装饰器，key：', key);
  };
}

@classDecorator
class SomeClass {
  @propertyDecorator()
  property: string;
  @methodDecorator()
  someMethod() {}
  @methodDecorator()
  paramMethod(@paramDecorator() param: any) {}
}

const classObj: any = new SomeClass();
console.log(classObj.decorator);
classObj.someMethod();
// classObj.property;
classObj.paramMethod(123);

function logDecorator(value: any): ClassDecorator {
  return (target: any) => {
    console.log('访问了：', value);
  };
}
// function overrideDecorator(): ClassDecorator {
//   return (target: any) => {
//     return class extends target {
//       info: string
//     }
//   }
// }

function overrideDecorator(target: any) {
  return class extends target {
    id: string;
    constructor() {
      super();
      console.log('重写类的构造函数');
    }
    getId(): string {
      console.log('重写类中的方法');
      return this.id;
    }
    getInfo(): void {
      console.log('新增方法 getInfo');
    }
  };
}

@logDecorator('订单类 Order')
@overrideDecorator
class Order {
  id: string;
  // constructor() {}
  getId(): string {
    return this.id;
  }
}
@logDecorator('商品类 Goods')
class Goods {
  id: string;
}
const subOrder: any = new Order();
subOrder.getId();
// subOrder.getInfo();
new Order();
new Goods();

export class Decorator {}
