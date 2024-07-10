import { usePanelInfo } from "../../../contexts/panel.context";

export const PanelClan = () => {
  const clan = usePanelInfo().clan;
  const player = usePanelInfo().player;
  if (!clan) return;

  const {
    name,
    memberCount,
    badge,
    type,
    location,
    requiredTrophies,
    warLeague,
    points,
    builderBasePoints,
    warWinStreak,
    warFrequency,
    warWins,
    warTies,
    warLosses,
  } = clan;
  const { tag } = player;

  const countryCodeToEmoji = (countryCode: string | null | undefined) => {
    if (!countryCode) return "";
    return countryCode.replace(/[A-Z]/g, (match: string) =>
      String.fromCodePoint(match.charCodeAt(0) + 127397)
    );
  };

  return (
    <main className="panel__content">
      <div className="profile-card">
        <div className="profile-card__picture">
          <img
            src={badge.url}
            alt="Profile"
            className="profile-card__picture-img"
          />
        </div>
        <div className="profile-card__container">
          <div className="profile-card__name">
            <h1 className="profile-card__name">{name}</h1>
          </div>
          <div className="profile-card__details">
            <div className="profile-card__detail">{memberCount}</div>
            <div className="profile-card__detail">{type}</div>
            <div className="profile-card__detail">
              <div className="profile-card__detail-flag">
                {countryCodeToEmoji(location?.countryCode)}
              </div>
              {location?.name}
            </div>
            <div className="profile-card__detail">{requiredTrophies}</div>
            <div className="profile-card__detail">{warLeague?.name}</div>
          </div>
          <div className="profile-card__stats">
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">{points}</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">
                {builderBasePoints}
              </span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">{warWinStreak}</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">{warFrequency}</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">{warWins}</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">{warTies}</span>
            </div>
            <div className="profile-card__stat">
              <span className="profile-card__stat-value">{warLosses}</span>
            </div>
          </div>

          <div className="profile-card__bests">
            <p className="profile-card__bests-label">Player's Tag</p>
            <div className="profile-card__best-container">
              <div className="profile-card__best">{tag}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
