import React from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * QUESTION component
 * 
 * Ideally to be render as an array inside the F.A.Q. component,
 * but can be render alone just.
 * 
 * Here you have an example of a question definition:
 * 
 * 
 * 
 * ```javascript
 * //First define some bullets
 *   const bullets = [
 *     "you could say hello",
 *     "Open an issue",
 *     "making a pull request",
 *     "or give me more ideas to improve this component"]
 * //Then definy an action (WebBroser is a method from ["expo"](https://docs.expo.io/versions/latest/))
 * 
 * const action_example = () => {
 *    WebBrowser.openBrowserAsync(
 *        "https://github.com/Olcina/react-native-faq"
 *    )};
 *
 * //Wrap up everything in your quesstion props
 * const  props  = {
 *        question: "How can I help you?",
 *        reply: "You have several options to choose:",
 *        bullets: bullets,
 *        actionText: "I'm ready to help!",
 *        onClick: action_example}
 * 
 * //Finally render your question 
 * 
 * <Question  {...props} />
 *    
 * ```
 * 
 */
export default class Question extends React.Component {
    static propTypes = {
        /**
        * An array of strings containing the aditional bullets for the Questions.
        */
        bullets: PropTypes.array,
        /**
        * Each bullet is made of a Text component, use this props to style all bullets.
        */
        bulletStyle: PropTypes.object,
        /**
         * An string inside a Text component for the title.
         */
        actionText: PropTypes.string,
        /**
        * Main Question View component style.
        */
        containerStyle: PropTypes.object,
        /**
        * Question action button style container
        * It's a Touchable Opacity component containing a Text component
        */
        actionStyle: PropTypes.object,
        /**
        * Text component style for the Question title
        */
        actionTextStyle: PropTypes.object,
        /**
        * Question reply container style
        */
        replyStyle: PropTypes.object,
        /**
        * Question title container style
        */
        titleStyle: PropTypes.object,
        /**
        * onClick prop: Can be any function you want to trigger.
        */
        onClick: PropTypes.func,
    }

    renderBullets = () => {
        return this.props.bullets.map((bullet, index) => {
            return (
                <Text
                    key={`${bullet}-${index}`}
                    style={[this.props.bulletStyle]}
                >
                    {bullet}
                </Text>
            )
        }
        )
    }
    render() {
        return (
            <View
                key={this.props.id}
                style={[this.props.containerStyle]}>
                <Text style={[this.props.titleStyle]}>
                    {this.props.question}
                </Text>
                <br></br>
                <Text style={[this.props.replyStyle]}>
                    {this.props.reply}
                </Text>
                {/* Optional BULLETS */}
                {this.props.bullets ?
                    <View style={{ display: "flex", textAlign: "center" }}>
                        {this.renderBullets()}
                    </View>
                    :
                    <Text />
                }
                {/* Optional ACTION */}
                {this.props.actionText ?
                    <TouchableOpacity
                        style={[this.props.actionStyle]}
                        onPress={this.props.onClick ? this.props.onClick : null}
                    >
                        <Text style={[this.props.actionTextStyle]}>
                            {this.props.actionText}
                        </Text>
                    </TouchableOpacity>
                    :
                    <Text />}
            </View>
        )
    }
}

Question.defaultProps = {
    bullets: null,
    bulletStyle: {
        marginLeft: "10%"
    },
    containerStyle: {
        backgroundColor: "lightgrey",
        margin: 2,
        borderRadius: 5
    },
    actionStyle: {
        backgroundColor: "black",
        borderRadius: 5,
        margin: 5
    },
    actionTextStyle: {
        fontSize: 30,
        textAlign: "center"
    },
    replyStyle: {
        fontSize: 15
    },
    titleStyle: {
        fontSize: 20,
        textAlign:"center"
    },
    onClick: null,
}