type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
  topObj: T,
  bottomObj: U
): AllType {
  return {
    name: topObj.name,
    color: topObj.color,
    position: bottomObj.position,
    weight: bottomObj.weight,
  };
}

const topPage = {
  name: 'TopName',
  color: 'Red',
};

const bottomPage = {
  position: 10,
  weight: 5,
};

const result = compare(topPage, bottomPage);

console.log(result); 
