const { users, comments } = require('../sampleData');

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt } = require('graphql');

// User type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
    })
});

// Comment type
const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        id: { type: GraphQLID },
        content: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        score: { type: GraphQLInt },
        user: { 
            type: UserType,
            resolve(parent, args) {
                return users.find((user) => user.id === parent.user.userId);
            }
        },
        replies: { 
            type: new GraphQLList(ReplyType), 
            resolve(parent, args) {
               return parent.replies 
            }
        },
    })
});

// Reply Type
const ReplyType = new GraphQLObjectType({
    name: 'Reply',
    fields: () => ({
        id: { type: GraphQLID },
        content: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        score: { type: GraphQLInt },
        replyingTo: { type: GraphQLString },
        user: { 
            type: UserType,
            resolve(parent, args) {
                return users.find((user) => user.id === parent.user.userId);
            }
        },
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return users;
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return users.find(user => user.id === args.id);
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return comments;
            }
        },
        comment: {
            type: CommentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return comments.find(comment => comment.id === args.id);
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})