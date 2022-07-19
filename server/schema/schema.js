
const graphql =  require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

const User = require('../models/User');
const Comment = require('../models/Comment');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type:  GraphQLID },
        name: { type:  GraphQLString },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find({ userId: parent.id })
            }
        }
    })
});

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
                // find from user list userId === argsID
                return User.findById(parent.userId)
            }
        },
    })
});



// QUERIES
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return User.find();
            }
        },
        user: {
            type: UserType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                return User.findById(args.id)
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve(parent, args) {
                return Comment.find();
            } 
        },
        comment: {
            type: CommentType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args) {
                return Comment.findById(args.id)
            }
        },

    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let user = new User({
                    name: args.name
                });

                return user.save();
            }
        },
        addComment: {
            type: CommentType,
            args: {
                content: { type: GraphQLNonNull(GraphQLString) }, 
                createdAt: { type: GraphQLNonNull(GraphQLString) },
                score: { type: GraphQLNonNull(GraphQLInt)},
                userId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                let comment = new Comment({
                    content: args.content,
                    createdAt: args.createdAt,
                    score: args.score,
                    userId: args.userId,
                });

                return comment.save();
            }
        },
        deleteComment: {
            type: CommentType,
            args: { 
                id:  { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Comment.findByIdAndRemove(args.id);
            }
        },
        updateComment: {
            type: CommentType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                content: { type: GraphQLString }, 
                createdAt: { type: GraphQLString },
                score: { type: GraphQLInt },
                // userId: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                return Comment.findByIdAndUpdate(
                    args.id,
                    // args.userId,
                    {
                        $set: {
                            content: args.content,
                            createdAt: args.createdAt,
                            score: args.score
                        }
                    },
                    { new: true }
                );
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})