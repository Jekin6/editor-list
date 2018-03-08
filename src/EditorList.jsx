import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Collapse from 'antd/lib/collapse';
import Font from './components/Font';
import BackGround from './components/BackGround';
import Border from './components/Border';
import Interface from './components/Interface';
import Margin from './components/Margin';
import Shadow from './components/Shadow';
import Css from './components/Css';
import Transition from './components/Transition';
import State from './components/State';
import ClassName from './components/ClassName';
import {
  styleInUse,
  toArrayChildren,
  convertData,
  convertDefaultData,
  convertBorderData,
  convertShadowData,
  toCss,
  getRandomKey,
  removeMultiEmpty,
  removeEditClassName,
  getDomCssRule,
  getParentClassName,
  mobileTitle,
} from './utils';

const stateSort = { default: 0, hover: 1, focus: 2, active: 3 };

class EditorList extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultActiveKey: PropTypes.any,
    editorElem: PropTypes.any,
    onChange: PropTypes.func,
    useClassName: PropTypes.bool,
    isMobile: PropTypes.bool,
    parentClassNameCanUseTagName: PropTypes.bool,
    parentClassNameLength: PropTypes.number,
    editorDefaultClassName: PropTypes.string,
  };

  static defaultProps = {
    className: 'editor-list',
    defaultActiveKey: ['EditorClassName'],
    useClassName: true,
    onChange: () => {
    },
    isMobile: false,
    parentClassNameCanUseTagName: true,
    parentClassNameLength: 2,
    editorDefaultClassName: 'editor_css',
  };

  constructor(props) {
    super(props);
    this.select = {};
    this.defaultDataStyle = {};
    this.defaultData = {};
    this.cssString = '';
    this.state = this.setDefaultState(props.editorElem, props);
    this.setEditorElemClassName();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.editorElem !== nextProps.editorElem) {
      this.defaultDataStyle = {};
      this.defaultData = {};
      this.setState(this.setDefaultState(nextProps.editorElem, nextProps), () => {
        this.setEditorElemClassName();
      });
    }
    if (this.props.isMobile !== nextProps.isMobile) {
      const domStyle = this.getDefaultValue(nextProps.editorElem, nextProps.isMobile);
      this.defaultDataStyle = domStyle;
      const value = this.getDefaultData(domStyle[this.state.classState]);
      this.defaultData = value;
      this.setState({ value });
    }
  }

  onStateChange = (key, data) => {
    if (key === 'cursor') {
      const value = {
        cursor: data === 'auto' ? null : data,
      };
      this.onChange('state', value);
    } else {
      this.onChangeCssState(data);
    }
  }

  onChangeCssState = (classState) => {
    const { editorDefaultClassName, editorElem, isMobile, onChange } = this.props;
    const domStyle = this.getDefaultValue(editorElem, isMobile);
    const value = this.getDefaultData(domStyle[classState]);
    this.defaultData = this.getDefaultData(this.defaultDataStyle[classState]);
    this.setState({
      value,
      classState,
    });
    const { cssName, css, mobileCss } = this.state;
    onChange({
      className: `${this.parentClassName} .${cssName}`,
      parentClassName: this.parentClassName,
      cssName,
      value,
      css,
      mobileCss,
      cssString: this.cssString,
      classNameInDefault: !!this.classNameInDefaultDomClass(cssName, editorDefaultClassName),
    });
  }

  onClassNameChange = (cssName) => {
    const { editorElem, editorDefaultClassName } = this.props;
    editorElem.className = removeEditClassName(editorElem.className, editorDefaultClassName);
    const rand = editorElem.getAttribute('data-editor_css_rand');
    const name = cssName || rand;
    editorElem.setAttribute('data-editor_css_name', name);
    this.setState({
      cssName: name,
    }, this.setCssToDom);
  }

  onCssChange = (cssValue) => {
    const { editorElem, isMobile } = this.props;
    const { css, classState, mobileCss } = this.state;
    const myCss = isMobile ? mobileCss : css;
    this.setState({
      [isMobile ? 'mobileCss' : 'css']: {
        ...myCss,
        [classState]: cssValue,
      },
    }, () => {
      this.setCssToDom();
      // 关联编辑器里的参性, 后期忧化;
      const domStyle = this.getDefaultValue(editorElem, isMobile);
      const value = this.getDefaultData(domStyle[classState]);
      this.setState({
        value,
      });
    });
  }

  onChange = (key, data) => {
    const { value, classState, css, mobileCss } = this.state;
    const myCss = this.props.isMobile ? mobileCss : css;
    const v = {
      ...value,
      [key]: data,
    };
    let newCss = `  ${toCss(v, this.defaultData).replace(/\n/g, '\n  ')}`;
    const currentCss = newCss.split('\n')
      .filter(c => c).map(c => c.trim());
    const stateCss = myCss[classState];
    if (stateCss) {
      const stateCssArray = stateCss.split('\n').map(c => c.trim()).filter(c => c);
      const currentCssName = currentCss.map(str => str.split(':')[0].trim());
      const stateNewCss = stateCssArray.map(str => {
        const cssName = str.split(':')[0].trim();
        return currentCssName.indexOf(cssName) >= 0 || styleInUse[cssName] ? null : str;
      }).filter(c => c);
      newCss = `  ${`${currentCss.join('\n  ')}\n  ${stateNewCss.join('\n  ')}`.trim()}`;
    }
    const state = {
      value: v,
      [this.props.isMobile ? 'mobileCss' : 'css']: {
        ...myCss,
        [classState]: newCss,
      },
    };
    this.setState(state, this.setCssToDom);
  };

  getDefaultValue = (dom, isMobile) => {
    const domStyle = {};
    Object.keys(stateSort).forEach(key => {
      domStyle[key] = getDomCssRule(dom, isMobile, key === 'default' ? null : key);
    });
    return domStyle;
  }

  setCssToDom = () => {
    const { css, cssName, value, mobileCss } = this.state;
    const { editorElem, onChange, editorDefaultClassName } = this.props;
    if (cssName) {
      this.setClassToDom();
      this.setEditorElemClassName();
    } else {
      const str = css.default;
      editorElem.style.cssText = str.substring(str.indexOf('{') + 1, str.indexOf('}'));
    }
    onChange({
      className: `${this.parentClassName} .${cssName}`,
      parentClassName: this.parentClassName,
      cssName,
      value,
      css,
      mobileCss,
      cssString: this.cssString,
      classNameInDefault: !!this.classNameInDefaultDomClass(cssName, editorDefaultClassName),
    });
  }

  setClassToDom = () => {
    const { editorDefaultClassName } = this.props;
    const { css, mobileCss, cssName } = this.state;
    let cssStr = this.cssObjectToString(css, cssName);
    cssStr += `\n${mobileTitle}\n`;
    cssStr += this.cssObjectToString(mobileCss, cssName);
    cssStr += '\n}';
    this.cssString = cssStr;
    // 如果是自定义样式或生成的样式插入到 body
    const noDefault = !this.classNameInDefaultDomClass(cssName, editorDefaultClassName);
    let style = this.ownerDocument.querySelector(`#${this.dataId}`);
    // 通用插入到 head;
    if (style) {
      style.remove();
    }
    style = this.createStyle(noDefault);
    style.innerHTML = cssStr;
  }

  setEditorElemClassName = () => {
    const { editorElem, editorDefaultClassName } = this.props;
    const { cssName } = this.state;

    if (!this.classNameInDefaultDomClass(cssName, editorDefaultClassName)) {
      editorElem.className = removeMultiEmpty(`${this.defaultDomClass} ${
        cssName}-${editorDefaultClassName}`).trim();
    }
  }

  setDefaultState = (dom, props) => {
    this.ownerDocument = dom.ownerDocument;
    const classState = 'default';
    const domStyle = this.getDefaultValue(dom, props.isMobile);
    const value = this.getDefaultData(domStyle[classState]);
    const cssName = this.getClassName(props);
    const style = this.ownerDocument.querySelector(`#${this.dataId}`);
    if (dom.getAttribute('data-editor_css_id')
      && style) {
      const prev = style.previousElementSibling;
      style.remove();
      const defaultStyle = this.getDefaultValue(dom, props.isMobile);
      this.defaultDataStyle = defaultStyle;
      this.defaultData = this.getDefaultData(defaultStyle[classState]);
      const noDefault = !this.classNameInDefaultDomClass(cssName, props.editorDefaultClassName);
      this.ownerDocument[noDefault ? 'body' : 'head'].insertBefore(style, prev.nextSibling);
    } else {
      this.defaultDataStyle = domStyle;
      this.defaultData = value;
    }
    this.defaultDomClass = props.editorElem.className ?
      removeEditClassName(props.editorElem.className, props.editorDefaultClassName) : '';
    const css = this.getDefaultCssData(cssName);
    return {
      value,
      css: css.css,
      mobileCss: css.mobileCss,
      cssName,
      classState,
    };
  }

  getClassName = (props) => {
    const {
      editorElem,
      parentClassNameCanUseTagName,
      parentClassNameLength,
      editorDefaultClassName,
    } = props;
    const random = editorElem.getAttribute('data-editor_css_rand') || getRandomKey();
    this.dataId = editorElem.getAttribute('data-editor_css_id')
      || `${editorDefaultClassName}-${random}`;
    editorElem.setAttribute('data-editor_css_id', this.dataId);
    editorElem.setAttribute('data-editor_css_rand', random);
    const className = editorElem.getAttribute('data-editor_css_name') || `${random}`;
    editorElem.setAttribute('data-editor_css_name', className);

    this.parentClassName = getParentClassName(editorElem,
      parentClassNameCanUseTagName, parentClassNameLength);
    return this.props.useClassName ? className : '';
  };
  getDefaultCssData = () => {
    const css = {
      css: {
        default: '',
        hover: '',
        active: '',
        focus: '',
      },
      mobileCss: {
        default: '',
        active: '',
        focus: '',
      },
    };
    if (this.props.useClassName) {
      const setCssDataToDefault = (content, currentCss) => {
        content.split('}').filter(c => c.trim()).forEach(c => {
          const cssContentArray = c.split('{');
          const state = cssContentArray[0].split(':')[1];
          const key = state ? state.trim() : 'default';
          const cssContent = cssContentArray[1].trim();
          if (cssContent) {
            currentCss[key] = `  ${cssContent.split(';').filter(b => b)
              .map(d => `${d.trim()};`).join('\n  ').trim()}`;
          }
        });
      };
      const defaultClass = this.ownerDocument.querySelector(`#${this.dataId}`);
      if (defaultClass && defaultClass.tagName === 'STYLE') {
        const content = defaultClass.innerText;
        content.split(mobileTitle).forEach((item, i) => {
          setCssDataToDefault(item, css[i ? 'mobileCss' : 'css']);
        });
      }
    }
    return css;
  }

  getDefaultData = (style) => {
    const borderBool = style.borderStyle !== 'none' && style.borderColor !== '0px';
    return {
      state: {
        cursor: style.cursor,
      },
      font: {
        family: style.fontFamily,
        size: style.fontSize,
        weight: convertData(style.fontWeight),
        lineHeight: convertData(style.lineHeight),
        color: convertDefaultData(style.color),
        letterSpacing: convertData(style.letterSpacing),
        align: convertDefaultData(style.textAlign),
        decoration: convertData(style.textDecoration),
      },
      interface: {
        overflow: convertDefaultData(style.overflow),
        width: convertData(style.width),
        maxWidth: convertData(style.maxWidth),
        minWidth: convertData(style.minWidth),
        height: convertData(style.height),
        maxHeight: convertData(style.maxHeight),
        minHeight: convertData(style.minHeight),
        position: convertDefaultData(style.position),
        top: convertDefaultData(convertData(style.top, true)),
        right: convertDefaultData(convertData(style.right, true)),
        bottom: convertDefaultData(convertData(style.bottom, true)),
        left: convertDefaultData(convertData(style.left, true)),
      },
      background: {
        color: convertDefaultData(style.backgroundColor),
        image: (convertData(style.backgroundImage) || '').replace(/^url\(|\"|\)?/ig, ''),
        repeat: convertDefaultData(style.backgroundRepeat),
        position: convertDefaultData(style.backgroundPosition),
        size: convertDefaultData(style.backgroundSize),
        attachment: convertDefaultData(style.backgroundAttachment),
      },
      border: {
        style: convertBorderData(style.borderStyle, style.borderWidth),
        color: borderBool && convertBorderData(style.borderColor, style.borderWidth) || null,
        width: convertBorderData(style.borderWidth),
        radius: convertBorderData(style.borderRadius, null, true),
      },
      margin: {
        margin: convertBorderData(style.margin),
        padding: convertBorderData(style.padding),
      },
      shadow: {
        boxShadow: convertShadowData(style.boxShadow),
        textShadow: convertShadowData(style.textShadow),
      },
      transition: style.transition,
    };
  };

  getChildren = (props) => {
    const { value, css, mobileCss, cssName, classState } = this.state;
    const myCss = props.isMobile ? mobileCss : css;
    const stateValue = { cursor: value.state.cursor, classState };
    const classNameArray = this.defaultDomClass.split(' ');
    if (props.children) {
      this.select = {};
      return toArrayChildren(props.children).map(item => {
        const { ...itemProps } = item.props;
        const key = item.type.componentName;
        if (this.select[key]) {
          return console.warn(`child(${key}) component is repeat.`);
        }
        this.select[key] = true;
        itemProps.key = itemProps.key || key;
        if (key === 'EditorCss') {
          if (!this.props.useClassName) {
            return null;
          }
          itemProps.value = myCss[classState];
          itemProps.cssName = cssName;
          itemProps.onChange = this.onCssChange;
        } else if (key === 'EditorState') {
          itemProps.showClassState = this.props.useClassName;
          itemProps.value = stateValue;
          itemProps.onChange = this.onStateChange;
          itemProps.isMobile = this.props.isMobile;
        } else if (key === 'EditorClassName') {
          if (!this.props.useClassName) {
            return null;
          }
          itemProps.value = cssName;
          itemProps.placeholder = this.props.editorDefaultClassName;
          item.classNameArray = classNameArray;
        } else {
          itemProps.onChange = this.onChange;
          itemProps.value = value[key.toLocaleLowerCase().replace('editor', '')];
        }
        return cloneElement(item, itemProps);
      }).filter(c => c);
    }
    return [
      this.props.useClassName && (
        <ClassName
          onChange={this.onClassNameChange}
          value={cssName}
          classNameArray={classNameArray}
          placeholder={this.props.editorDefaultClassName}
          key="EditorClassName"
        />
      ),
      <State
        onChange={this.onStateChange}
        key="EditorState"
        showClassState={this.props.useClassName}
        value={stateValue}
        isMobile={this.props.isMobile}
      />,
      <Font onChange={this.onChange} key="EditorFont" value={value.font} />,
      <Interface onChange={this.onChange} key="EditorInterface" value={value.interface} />,
      <BackGround onChange={this.onChange} key="EditorBackGround" value={value.background} />,
      <Border onChange={this.onChange} key="EditorBorder" value={value.border} />,
      <Margin onChange={this.onChange} key="EditorMargin" value={value.margin} />,
      <Shadow onChange={this.onChange} key="EditorShadow" value={value.shadow} />,
      <Transition onChange={this.onChange} key="EditorTransition" value={value.transition} />,
      this.props.useClassName && (
        <Css
          onChange={this.onCssChange}
          key="EditorCss"
          value={myCss[classState]}
          cssName={cssName}
        />
      ),
    ];
  }

  cssObjectToString = (css, name) => {
    const cssName = !this.classNameInDefaultDomClass(name, this.props.editorDefaultClassName)
      ? `${name}-${this.props.editorDefaultClassName}` : name;
    return Object.keys(css).sort((a, b) => (
      stateSort[a] > stateSort[b]
    )).map(key => {
      switch (key) {
        case 'default':
          return `${this.parentClassName} .${cssName} {\n${css[key]}\n}`;
        default:
          return `${this.parentClassName} .${cssName}:${key} {\n${css[key]}\n}`;
      }
    }).join('\n');
  }

  createStyle = (n) => {
    const style = this.ownerDocument.createElement('style');
    style.id = this.dataId;
    this.ownerDocument[n ? 'body' : 'head'].appendChild(style);
    return style;
  }

  classNameInDefaultDomClass = (name, editorDefaultClass) => (
    this.defaultDomClass.split(' ')
      .filter(key => key === name || key === `${name}-${editorDefaultClass}`).length
  )

  render() {
    const { ...props } = this.props;
    ['useClassName', 'editorElem', 'onChange'].map(key => delete props[key]);
    return (<Collapse bordered={false} {...props}>
      {this.getChildren(props)}
    </Collapse>);
  }
}
EditorList.State = State;
EditorList.Font = Font;
EditorList.BackGround = BackGround;
EditorList.Border = Border;
EditorList.Interface = Interface;
EditorList.Margin = Margin;
EditorList.Shadow = Shadow;
EditorList.Css = Css;
EditorList.Transition = Transition;
export default EditorList;
