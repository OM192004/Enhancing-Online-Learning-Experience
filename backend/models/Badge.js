const badgeSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Badge name is required'],
        trim: true,
      },
      description: {
        type: String,
        required: [true, 'Badge description is required'],
      },
      icon: {
        type: String, 
        default: '',
      },
      criteria: {
        type: String,
        required: true, 
      },
      awardedTo: [
        {
          userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
          awardedAt: { type: Date, default: Date.now },
        },
      ],
    },
    { timestamps: true }
  );
  
  const Badge = mongoose.model('Badge', badgeSchema);
  
  module.exports = Badge;
  