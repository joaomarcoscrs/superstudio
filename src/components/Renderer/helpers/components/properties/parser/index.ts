import ActionParser from './action';
import BaseParser from './base';

class PropertyParser {
  private static parsers: Record<string, typeof BaseParser> = {
    action: ActionParser,
  };

  static parse(properties: Record<string, any>): Record<string, any> {
    const props: Record<string, any> = {};

    for (const [key, value] of Object.entries(properties)) {
      const Parser = this.parsers[key] || BaseParser;
      props[key] = Parser.parse(value);
    }

    return props;
  }
}

export default PropertyParser;
